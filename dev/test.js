const Blockchain = require('./blockchain')
const bitcoin = new Blockchain();

const previousBlockHash = 'KJFHIUFGHU';
const currentBlockData = [
  {
    amount: 10,
    sender: 'dkjhfdsdsd',
    recipient: 'FIUHGDSFIUHDF'
  },
  {
    amount: 100,
    sender: 'dksJBVDJ89jhfdsdsd',
    recipient: 'FIUHGDSSDSANSADNADFIUHDF'
  },
  {
    amount: 710,
    sender: 'CSCDCVdkjhfdsdsd',
    recipient: 'FIUVDVDSVFDSFSDHGDSFIUHDF'
  }
];
 const nonce = 200;


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
