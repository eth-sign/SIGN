// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenHolder is Ownable {
    mapping(bytes => string) private tokenURIs;

    constructor() {}

    function mint(bytes memory sig, string memory metadata) public {
        tokenURIs[sig] = metadata;
    }

    function transfer(bytes memory sig, address destSmartContract) public onlyOwner {
        // TODO
    }

    function tokenURI(bytes memory sig) public returns(string memory) {
        return tokenURI(sig);
    }
}