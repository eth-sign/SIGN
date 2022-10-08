import { HardhatUserConfig } from "hardhat/config";
import dotenv from 'dotenv';
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ETH_URL,
      accounts: [process.env.STAGING_PRIVATE_KEY],
    },
  },
};

export default config;
