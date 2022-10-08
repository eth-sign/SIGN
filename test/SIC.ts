import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { SIC__factory } from "../typechain-types";

describe("SIC", function () {
  async function deploySICFixture() {
    const SIC = await ethers.getContractFactory("SIC");
    const sic = await SIC.deploy();

    const owner = sic.owner
    return { sic, owner };
  }

  describe("Deployment", function () {
    it("Should deploy contract", async function () {
      const { sic, owner } = await loadFixture(deploySICFixture);

      expect(owner).to.not.be.null;
    });

    it("Should mint token", async function () {
      const { sic, owner } = await loadFixture(deploySICFixture);

      const sign = ethers.utils.formatBytes32String("some signature");
      const content = "content";
      sic.mint(sign, content);

      expect(await sic.tokenURI(sign)).to.equal(content);
    });

    it("Should transfer token", async function() {
      const from = await deploySICFixture();
      const to = await deploySICFixture();

      const sign = ethers.utils.formatBytes32String("some signature");
      const content = "content";
      from.sic.mint(sign, content);

      const sign2 = ethers.utils.formatBytes32String("some signature2");
      const content2 = "content2";
      from.sic.mint(sign2, content2);

      from.sic.transfer(sign, to.sic.address);

      expect(await from.sic.tokenURI(sign)).equal("");
      expect(await to.sic.tokenURI(sign)).equal(content);
      expect(await from.sic.tokenURI(sign2)).equal(content2);
      expect(await to.sic.tokenURI(sign2)).equal("");
    });

    it("Should not transfer if not correct destination address", async function() {
      const from = await deploySICFixture();

      const sign = ethers.utils.formatBytes32String("some signature");
      const content = "content";
      from.sic.mint(sign, content);

      from.sic.transfer(sign, "0xb794f5ea0ba39494ce839613fffba74279579268");

      expect(await from.sic.tokenURI(sign)).equal(content);
    });

  });
});
