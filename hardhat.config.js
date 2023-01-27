require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apikey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY
    }
  }
};
