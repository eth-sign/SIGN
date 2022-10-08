import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { TokenHolder__factory } from "../typechain-types";

describe("TokenHolder", function () {
  async function deployTokenHolderFixture() {
    const TokenHolder = await ethers.getContractFactory("TokenHolder");
    const tokenHolder = await TokenHolder.deploy();

    const owner = tokenHolder.owner
    return { tokenHolder, owner };
  }

  describe("Deployment", function () {
    it("Should deploy contract", async function () {
      const { tokenHolder, owner } = await loadFixture(deployTokenHolderFixture);

      expect(owner).to.not.be.null;
    });

    it("Should mint token", async function () {
      const { tokenHolder, owner } = await loadFixture(deployTokenHolderFixture);

      const sign = ethers.utils.formatBytes32String("some signature");
      const content = "content";
      tokenHolder.mint(sign, content);

      expect(await tokenHolder.tokenURI(sign)).to.equal(content);
    });

    it("Should transfer token", async function() {
      const from = await deployTokenHolderFixture();
      const to = await deployTokenHolderFixture();

      const sign = ethers.utils.formatBytes32String("some signature");
      const content = "content";
      from.tokenHolder.mint(sign, content);

      from.tokenHolder.transfer(sign, to.tokenHolder.address);

      expect(await from.tokenHolder.tokenURI(sign)).equal("");
      expect(await to.tokenHolder.tokenURI(sign)).equal(content);
    });

    it("Should not transfer if not correct destination address", async function() {
      const from = await deployTokenHolderFixture();

      const sign = ethers.utils.formatBytes32String("some signature");
      const content = "content";
      from.tokenHolder.mint(sign, content);

      from.tokenHolder.transfer(sign, "0xb794f5ea0ba39494ce839613fffba74279579268");

      expect(await from.tokenHolder.tokenURI(sign)).equal(content);
    });

  });
});
