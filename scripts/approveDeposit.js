// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x7418dA44D43E59a0ed4961D6454375CF81B094E8"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x19303b6bda13b97198c2836442fC85c3946DD57F"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxRootAddress);

    const approveTx = await tokenContract.approve(fxERCRootAddress, 500);
    await approveTx.wait();

   console.log('Approval confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 500, "0x6556");
    await depositTx.wait();

    console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
