export const getProvider = networkId => {
  switch (networkId) {
    case '1':
      return 'https://mainnet.infura.io/';
    case '3':
      return 'https://ropsten.infura.io/';
    case '4':
      return 'https://rinkeby.infura.io/';
    case '42':
      return 'https://kovan.infura.io/';
    case 523:
      return 'https://dev-evm.dev.findora.org:8545';
    default:
      return 'http://localhost:8545/';
  }
};

export const getRPCProvider = networkId => {
  switch (networkId) {
    case 523:
      return 'https://dev-evm.dev.findora.org:8545';
    default:
      return getProvider(networkId);
  }
};

export const getSimpleTokenAddress = networkId => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0x131855dda0aaff096f6854854c55a4debf61077a';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    default:
      return '0x0';
  }
};

export const getCryptoHerosTokenAddress = networkId => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0xa82Bc392bF65d03A796E1666d27594fB31De4B93';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case 523:
      return '0x9387327F57668B8088C167d454cBC4AaC7268337';
    default:
      return '0x0';
  }
};

export const getCryptoHerosGameAddress = networkId => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0xb4FF27d8cD1C5b1e3D4BD8A8FFEBdA9BE9517a4b';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case 523:
      return '0x1c6B02980E668d655802840b39e25ae1C3b5B668';
    default:
      return '0x0';
  }
};

export const getCurrentAddress = web3 => {
  if (web3 === null) return;
  return web3.eth.accounts[0];
};

export const getCurrentNetwork = web3 => {
  if (web3 === null) return;
  return web3.version.network;
};
