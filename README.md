# StakeEth NFT Contract

This Solidity smart contract allows the creation and management of NFTs (Non-Fungible Tokens) through the Ethereum blockchain. NFTs minted through this contract can represent unique digital assets and are based on the ERC721 standard.

## Features

1. Allows the owner to mint NFTs with a specified maximum quantity.

2. Each minted NFT is associated with a base URL for metadata.

3. Provides a prompt description associated with the contract.

## Getting Started

To interact with the StakeEth NFT Contract, you'll need to perform the following steps:

1. Install Dependencies: Ensure you have the necessary dependencies installed. You might need a Solidity development environment and access to an Ethereum network.

2. Deploy the Contract: Deploy the StakeEth contract to an Ethereum network. Make sure you have sufficient Ether in your wallet to deploy the contract.

3. Interact with the Contract: After deploying, you can interact with the contract using the provided functions:

    mint(uint256 amount): Mint new NFTs, where amount is the number of NFTs to mint.
   
    promptDescription(): Get the prompt description associated with the contract.
   
## Contract Details

a) Owner: The initial owner of the contract is set to the deploying address.

b) Max Quantity: The maximum number of NFTs that can be minted is set to 5.

c) Base URL: The base URL for the NFT metadata is set to the provided IPFS gateway URL.

d) Prompt: The prompt description is set to "Generate an NFT."

## Author

SATYA PRAKASH

## Licence

This project is licensed under the MIT License - see the LICENSE file for details.

