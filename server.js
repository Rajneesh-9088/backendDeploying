const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants')
const express = require('express') 
const path = require('path')

const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => res.send("hello backend"))

app.listen(3030, () => {console.log("Sever Started")})