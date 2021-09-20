<p align=center>
<img src="./icon.png">
</p>

> Non-fungible token game

<img src="https://i.imgur.com/77nixUU.png" height="30"/>

This project is a crypto card game that uses [OpenZepplin](https://github.com/OpenZeppelin/openzeppelin-solidity).

The contract is compiled and deployed under the ERC-721 non-fungible token standard with truffle framework. After deploying onto the Ethereum blockchain, users will be able to play the game by interacting with the smart contract through DAPP’s front-end interface.

Acquiring game card:
Users can acquire game cards using ETH. Every game card will have a game point on it, which will be used to determine the winner later in the game.

## Roles

#### Card Collection
Players can aquire card using ether. Each card will have a random points on it, which will be used to deternmine the winner in the card game.

![Card Collection](herocollection.gif)

#### Card Battle
Once entered the game, players will need to choose a card to play for the round. Each round, the smart contract will randomly decide either card with larger or smaller point wins the round. At the same time, the smart contract will also randomly generate a number in order to compete with the player. Winner of the game will receive the price.

![Card Battle](cardbattle.gif)

#### Dashboard
You can view the card battle history about all the games you played.

![Game History](gamehistory.gif)

## ERC-721 Token

ERC-721 non-fungible token:
    ERC-721 is a free, open standard that describes how to build non-fungible or unique tokens on the Ethereum blockchain. While most tokens are fungible (every token is the same as every other token), ERC-721 tokens are all unique (with unique ID).

[Reference](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)


## Contracts
You can find contract detail under `contracts/` directory:
- [`CryptoHerosGame.sol`](./contracts/CryptoHerosGame.sol):
    The implementation of game execution and rule.

- [`CryptoHerosToken.sol`](./contracts/CryptoHerosToken.sol):
    The implementation of game cards purchase and generation.

## Technical stack

### Frontend
- React
- Redux
- Saga

### UI
- Sass
- Material-UI

### Smart contract/Solidity
- Truffle

## Requirements

* NodeJS 8.0+ recommended.
* Windows, Linux or Mac OS X.

## How To Install Dependencies

Install truffle:

```
npm install -g truffle
```

Then install contract dependencies:

```
npm install
```

## How To Deploy

Now you can compile and deploy contracts:

```
truffle compile && truffle migrate --network prod
```

## Playground

We already deployed contracts to [Findora](http://dev-evm.findorascan.io.s3-website-us-west-2.amazonaws.com/) network. You can play with them RIGHT NOW.

| Contract         | Token address | Transaction hash
|------------------|---------------|---------------------
| CryptoHerosGame  | [0x0033F3F4BFA0A4A74C0BE0a4Cb33A893226a7f65](http://dev-evm.findorascan.io.s3-website-us-west-2.amazonaws.com/addressevm?key=0x0033F3F4BFA0A4A74C0BE0a4Cb33A893226a7f65) | [0x60fe6ac2ec9b0f79e2bf8b51c4d0ffbdef289ac424003a79bf3efd79e38324a3](http://dev-evm.findorascan.io.s3-website-us-west-2.amazonaws.com/tx/0x60fe6ac2ec9b0f79e2bf8b51c4d0ffbdef289ac424003a79bf3efd79e38324a3)
| CryptoHerosToken | [0xF0cD37152E9d78Cc0456313f29BaD49993B877e5](http://dev-evm.findorascan.io.s3-website-us-west-2.amazonaws.com/addressevm?key=0xF0cD37152E9d78Cc0456313f29BaD49993B877e5) | [0x9b3104d591c91600fad67be6c2be6d7ce6af88db47ca78ab9ac5ddde772f1632](http://dev-evm.findorascan.io.s3-website-us-west-2.amazonaws.com/tx/0x9b3104d591c91600fad67be6c2be6d7ce6af88db47ca78ab9ac5ddde772f1632)

## Card List

See [CARD.md](./dapp/CARD.md) for more information.

## Licence

See [LICENSE](./LICENSE) for details.
