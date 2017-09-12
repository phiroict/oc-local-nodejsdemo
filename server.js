const express = require('express')
const app = express()

app.get('/', function (req, res) {
    host = req.connection.localAddress
    res.send('<H1>Hello World!</H1><p>We are serial!</p><p>' + host +'</p>')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})