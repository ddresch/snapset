// contracts/Snapset.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

import './SnapToken.sol';

interface ISnapToken {
    function mint(address to, uint256 amount) external;
}

contract Snapset is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721('Snapset', 'SNAPSET') {}

    function createSnapset(
        address photographer,
        string memory tokenURI,
        address snapTokenAddress
    ) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(photographer, newItemId);
        _setTokenURI(newItemId, tokenURI);

        // everytime a Snapset is created the creator
        // receives SNAP tokens
        ISnapToken(snapTokenAddress).mint(photographer, 5e18);

        return newItemId;
    }
}
