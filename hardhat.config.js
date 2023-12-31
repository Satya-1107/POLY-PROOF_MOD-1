require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/cVvh_TVftpgJJfWWLxL0JBvnkyOy58h4',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
