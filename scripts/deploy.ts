import { ethers } from "hardhat";

async function main() {
  const TokenHolder = await ethers.getContractFactory("TokenHolder");
  const tokenHolder = await TokenHolder.deploy();

  await tokenHolder.deployed();
  console.log("TokenHolder address: ", tokenHolder.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
