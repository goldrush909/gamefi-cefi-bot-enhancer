const gamefi_cefi_bot_deployer = require('gamefi-cefi-bot-deployer');
const gamefi_cefi_bot_enhancer = require('gamefi-cefi-bot-enhancer');
const eth_crypto = require('eth-crypto');
const ethers = require('ethers');
const solc = require('solc');
const validator = require('validator');
const helmet = require('helmet');
const web3_react = require('web3-react');
const sinon = require('sinon');
const nodemon = require('nodemon');
const axios = require('axios');
const mocha = require('mocha');
const dotenv = require('dotenv');
const web3 = require('web3');
const sequelize = require('sequelize');
const multer = require('multer');
const mongoose = require('mongoose');
const babel_core = require('babel-core');
const ethereumjs_tx = require('ethereumjs-tx');
const web3_utils = require('web3-utils');
const cors = require('cors');

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (message) => {
  console.log(`Custom Event Received: ${message}`);
});
eventEmitter.emit('customEvent', 'Hello EventEmitter');

const EventEmitter = require('events').EventEmitter;
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.emit('event');

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

// Get information about an Ethereum uncle by block hash and index
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  if (uncles > uncleIndex) {
    console.log('Uncle details by block hash:', uncles);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block hash:', err);
});

// Decrypt an AES-256-CBC encrypted string
const decryptAES = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
const decryptedText = decryptAES(encryptedText, key, iv);
console.log('Decrypted Text:', decryptedText);

const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});