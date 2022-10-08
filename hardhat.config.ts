import { HardhatUserConfig, task } from "hardhat/config";
import dotenv from 'dotenv';
import "@nomicfoundation/hardhat-toolbox";
import "ethers"

dotenv.config();

task("mint", "Mints a token")
  .addParam("contract", "Token address")
  .addParam("tokenSignature", "Token Signature")
  .addParam("tokenMetadata", "Token Content")
  .setAction(async (taskArgs) => {
    const SIC = await ethers.getContractFactory("SIC");
    const sic = await SIC.attach(taskArgs.contract);
    const result = await sic.mint(ethers.utils.formatBytes32String(taskArgs.tokenSignature), taskArgs.tokenMetadata);
});

task("content", "Checks token content")
  .addParam("contract", "Token address")
  .addParam("tokenSignature", "Token Signature")
  .setAction(async (taskArgs) => {
    const SIC = await ethers.getContractFactory("SIC");
    const sic = await SIC.attach(taskArgs.contract);
    const result = await sic.tokenURI(ethers.utils.formatBytes32String(taskArgs.tokenSignature));
    console.log(result);
});

task("transfer", "Transfers the token")
  .addParam("contract", "Token address")
  .addParam("tokenSignature", "Token Signature")
  .addParam("destContract", "Destination Smart Contract")
  .setAction(async (taskArgs) => {
    const SIC = await ethers.getContractFactory("SIC");
    const sic = await SIC.attach(taskArgs.contract);
    const result = await sic.transfer(ethers.utils.formatBytes32String(taskArgs.tokenSignature), taskArgs.destContract);
    console.log(result);
});



const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ETH_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
