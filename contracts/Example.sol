// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Example is ERC721, Ownable {
    constructor() ERC721("Example", "EXP") {}

    function transferToContract(bytes memory sig, address destSmartContract) public onlyOwner {
        // TODO
    }
}