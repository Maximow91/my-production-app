const fs = require('fs')
const path = require('path')

const cachePath = path.join(__dirname,'../','/node_modules/.cache')
console.log(cachePath)
fs.rmSync(cachePath, { recursive: true, force: true })