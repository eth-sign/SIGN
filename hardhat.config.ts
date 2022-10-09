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
    scroll: {
      url: process.env.scroll,
      gasLimit: 100000000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    klaytn: {
      url: process.env.klaytn,
      accounts: [process.env.PRIVATE_KEY],
    },
    gnosis: {
      url: process.env.gnosis,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: process.env.polygon,
      gasLimit: 10000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimism: {
      url: process.env.optimism,
      gasLimit: 10000,
      accounts: [process.env.PRIVATE_KEY],
    },
    eth:{
      url: process.env.eth,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: process.env.ETH_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
