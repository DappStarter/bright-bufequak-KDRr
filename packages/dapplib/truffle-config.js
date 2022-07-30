require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift raise stereo smile imitate prison food gauge'; 
let testAccounts = [
"0xf2e77cced5e3cd7d7db734913eccec33f8bddf10bbb0a7cd79b123695e6faa98",
"0x3478b9dc2f3cbe9293180722978839250775a7ff086efcc9935c463f0be5ab2c",
"0x98c946322f150aaa20d404a7446b1cebd2160c0bacfd4f6488512d9a47999401",
"0x0975a62b0543b5888c9155de34d52625d6547d57e763e0d471a28269324ca485",
"0x82c00612e924118aa211bfbe13d692c66dfef492443447e9e16db9f646fc015e",
"0x1d74ff30bff5deb4ddc1b835b472d59c41988463a7758af589a19dcc3ce89854",
"0x5f999e13031c00434a7dad5e93465652bb3d0f66beadf3426b0a4c1176707c83",
"0xf0056baaa922a637bff1ab1d37d323254a4616655acf8df977bc975702f3024d",
"0x331b27c63e7f6bbf2b3b7e284ea1a147a46afe0603a4739c9428d8471e84f8d0",
"0x81698b51b01029890059d2ea9e3ca2bc2b622cfe48398a1951cadfef6764c848"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


