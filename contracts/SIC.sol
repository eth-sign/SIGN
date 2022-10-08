// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract SIC is Ownable {
    mapping(bytes => string) private tokenURIs;

    constructor() {}

    function mint(bytes memory sig, string memory metadata) external onlyOwner {
        tokenURIs[sig] = metadata;
    }

    function transfer(bytes memory sig, address destSmartContract) external onlyOwner {
        // TODO: Fail if the token does not exist
        SIC sic = SIC(destSmartContract);
        string memory metadata = tokenURIs[sig];
        delete tokenURIs[sig];
        sic.receiveToken(sig, metadata);
    }

    function receiveToken(bytes memory sig, string memory metadata) external {
        // TODO: Check if sender has the token
        tokenURIs[sig] = metadata;
    }

    function tokenURI(bytes memory sig) external view returns(string memory) {
        return tokenURIs[sig];
    }
}