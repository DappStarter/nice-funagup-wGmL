require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food guard rescue machine upgrade ice light army genius'; 
let testAccounts = [
"0xe91bcad5f1cd0763e6840c1f7887eb3bf42b5bbdf727ff83004f2babf502d87a",
"0x228f2b17475156c856ae0ec0b4e49e731a06f5dc6d737081ea5555f8eb19c43c",
"0x6aac307e9299945f17f505ce95e91ed9ffb49f39a04c47e45572a6fca11197a3",
"0x14767fd604a0c90fdfe4e28859633c8a3c8ca7d21b9e8d181c23564e15f4b547",
"0x5bf46190bdcbc9a48b2299772ce0a5fc05c9ddf3635cc2e4bcefc746083190ae",
"0x22080f06bb0d3dc01afea4e49243400e5073539ea7dd0b7c72905b65901aa6d6",
"0x5c6cab1f0fa164a7bb4e9dc3528868f2269319b1049945b93f24d609f97edb00",
"0x1e7c126f946992d0649adb7081aa9516e1d614b283698c3bfd863709ba9d9dbf",
"0x8a89515bbbdc289c218492209d92fd29496cddc7ecd1eab6f62340df433b1b5d",
"0xa61a93479cdb5292cc92676b346ff64d787adb12e9027765a727a4d116d0457f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

