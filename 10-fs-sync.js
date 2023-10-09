const {readFileSync , writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/subFolder/second.txt','utf-8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',`Here is the result ${first} and ${second}`,{flag:'a'})//flag:a adds instead of overriding

console.log('done')
console.log('start the next one')
