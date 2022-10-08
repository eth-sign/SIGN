// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenHolder is Ownable {
    mapping(bytes => string) private tokenURIs;

    constructor() {}

    function mint(bytes memory sig, string memory metadata) external {
        tokenURIs[sig] = metadata;
    }

    function transfer(bytes memory sig, address destSmartContract) external onlyOwner {
        TokenHolder tokenHolder = TokenHolder(destSmartContract);
        tokenHolder.mint(sig, tokenURIs[sig]);
        delete tokenURIs[sig];
    }

    function tokenURI(bytes memory sig) external view returns(string memory) {
        return tokenURIs[sig];
    }
}