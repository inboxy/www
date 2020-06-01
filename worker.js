console.log("hello from worker");

importScripts('https://cdnjs.cloudflare.com/ajax/libs/nanoid/3.1.9/non-secure/index.min.js');

import { nanoid } from 'nanoid/non-secure'
var id = nanoid();

console.log(id);