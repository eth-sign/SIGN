// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract SIC is Ownable {
    mapping(bytes => string) private tokenURIs;
    bytes[] private signatures;

    constructor() {}

    function mint(bytes memory sig, string memory metadata) external onlyOwner {
        tokenURIs[sig] = metadata;
        signatures.push(sig);
    }

    function transfer(bytes memory sig, address destSmartContract) external onlyOwner {
        // TODO: Fail if the token does not exist
        SIC sic = SIC(destSmartContract);
        string memory metadata = tokenURIs[sig];
        delete tokenURIs[sig];
        for (uint i=0; i < signatures.length; i++) {
            if (keccak256(signatures[i]) == keccak256(sig)) {
                signatures[i] = signatures[signatures.length-1];
                break;
            }
        }
        signatures.pop();
        sic.receiveToken(sig, metadata);
    }

    function receiveToken(bytes memory sig, string memory metadata) external {
        // TODO: Check if sender has the token
        tokenURIs[sig] = metadata;
        signatures.push(sig);
    }

    function tokenURI(bytes memory sig) external view returns(string memory) {
        return tokenURIs[sig];
    }

    function getSignatures() external view returns(bytes[] memory) {
        return signatures;
    }
}