
const ipc = require('hyper-ipc-secure');
require('dotenv').config();

import ev from './eval.js'
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const testy = inp => {
    console.log("INPUT", inp);
    const outp = { ...inp };
    console.log("OUTPUT", outp);
    return outp;
}
const init = (kp, node = ipc(), serverKey = node.getSub(kp, process.env.SERVERNAME), callKey = node.getSub(kp, process.env.IPCNAME)) => {
  node.lbserve(callKey, serverKey, process.env.IPCNAME, testy);
  return node;
}
export default init;
