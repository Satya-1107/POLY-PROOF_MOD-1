// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "contracts/ERC721A.sol";
contract StakeEth is ERC721A {
    address public owner;
    uint256 public maxQuantity = 5;
    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmS7dkha1zEbWfCW6d3A4seHyJVR1hJQRRixN7BKxUVDmx/?_gl=1*1oxgcja*_ga*MTA3NjQxMDc4NS4xNjg5Nzc3MDM4*_ga_5RMPXG14TE*MTY4OTgxODgwMi4zLjEuMTY4OTgxODk2MS41OS4wLjA.";
    string public prompt = "Generate a NFT.";

    constructor() ERC721A("PersonalNFT", "PNFT") {
    owner = msg.sender;
    }

    // Modifier that only allows the owner to execute a function
    modifier onlyOwner() {
        require(msg.sender == owner, "Owner only have right to access");
        _;
    }

     // Function to mint NFT which only owner can perform
    function mint(uint256 amount) external payable onlyOwner {
        require(totalSupply() + amount <= maxQuantity, "to mine maximum limit is 5");
        _mint(msg.sender, amount);
    }

     // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    // Return the URL for the prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
