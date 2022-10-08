import { ethers } from "hardhat";

async function main() {
  const SIC = await ethers.getContractFactory("SIC");
  const sic = await SIC.deploy();

  await sic.deployed();
  console.log("Stationary Identity Contract (SIC) address: ", sic.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
