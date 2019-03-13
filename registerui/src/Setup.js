import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
let regABI= [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"accounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf2a40db8"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_name","type":"string"}],"name":"setData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x18562dae"},{"constant":true,"inputs":[{"name":"ins","type":"uint256"}],"name":"getData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0178fe3f"}]
let regAddress='0x567050c7bFBBa51fEB07cc1aD6d9f88f7B3Ac82E';
web3.eth.defaultAccount = web3.eth.accounts[7]


const regContract=web3.eth.contract(regABI).at(regAddress);
export {regContract};