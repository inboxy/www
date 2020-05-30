import { nanoid } from 'nanoid'

const nanoid = customAlphabet('1234567890abcdef', 10)

var idnumber = nanoid();

console.log("++++++++++++++++++++++++++++++");
console.log("id:" + idnumber);
console.log("++++++++++++++++++++++++++++++");