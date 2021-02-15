const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants')
const express = require('express') 
const path = require('path')

const SERVER_PORT = process.env.PORT || 3030

const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => res.send("hello backend"))

app.listen(SERVER_PORT, () => {console.log("Sever Started")})