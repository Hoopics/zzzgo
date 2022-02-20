// SPDX-License-Identifier: MIT
// pragma solidity ^0.4.17;
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ERC721TokenMock
 * This mock just provides a public mint and burn functions for testing purposes,
 * and a public setter for metadata URI
 */
contract CryptoHerosToken is ERC721, Ownable {
  mapping (uint256 => address) internal tokenOwner;
  mapping (address => uint256[]) internal ownedTokens;

  uint constant minPrice = 0.00 ether;

  string[] public images;
  string[] public backgrounds;
  string[] public descriptions;
  uint[] public numbers;

  struct Hero {
    uint number;
    string image;
    string background;
    string description;
  }

  uint nonce = 0;
  Hero[] public heros;

  mapping(uint256 => Hero) public tokenProperty;

  constructor(string memory name, string memory symbol)
    ERC721(name, symbol)
  { }

  function initImage(string memory _image) public onlyOwner {
    images.push(_image);
  }

  function initBackground(string memory _background) public onlyOwner {
    backgrounds.push(_background);
  }

  function initNumberAndDescription(uint _number, string memory _description) public onlyOwner {
    numbers.push(_number);
    descriptions.push(_description);
  }

  /**
   * Only owner can mint
   */
  function mint() public payable {
    require(numbers.length > 0);
    require(images.length > 0);
    require(backgrounds.length > 0);
    require(descriptions.length > 0);
    require(msg.value >= minPrice);
    // require(owner.send(msg.value));

    address payable owner = payable(owner());
    require(owner.send(msg.value));

    // uint256 _tokenId = totalSupply();

    uint num = rand(0, numbers.length);

    uint256 _tokenId = uint256(num);
    tokenOwner[_tokenId] = msg.sender;

    // update ownedTokens
    ownedTokens[msg.sender].push(_tokenId);
   
    uint _number = numbers[num];
    string memory _image = images[rand(0, images.length)];
    string memory _background = backgrounds[rand(0, backgrounds.length)];
    string memory _description = descriptions[num];
    heros.push(Hero({number: _number, image: _image, background: _background, description: _description}));
    tokenProperty[_tokenId] = Hero({number: _number, image: _image, background: _background, description: _description});
    super._mint(msg.sender, _tokenId);
  }

  function burn(uint256 _tokenId) public onlyOwner {
    tokenOwner[_tokenId] = address(0);
    // super._burn(ownerOf(_tokenId), _tokenId);
    super._burn(_tokenId);
  }

  function getOwnedTokens(address _owner) external view returns (uint256[] memory) {
    // return ownedTokens[_owner];
    // Get How many tokens which _owner owned
    return ownedTokens[_owner];
  }

  function getTokenProperty(uint256 _tokenId) external view returns (uint _number, string memory _image, string memory _background, string memory _description) {
    return (tokenProperty[_tokenId].number, tokenProperty[_tokenId].image, tokenProperty[_tokenId].background, tokenProperty[_tokenId].description);
  }

  function rand(uint min, uint max) private returns (uint){
    nonce++;
    return uint(keccak256(abi.encodePacked(nonce)))%(min+max)-min;
  }

  function getHerosLength() external view returns (uint) {
    return heros.length;
  }

  function withdraw(uint amount) public payable onlyOwner returns(bool) {
    require(amount <= address(this).balance);
    payable(owner()).transfer(amount);
    return true;
  }

}