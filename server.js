'use strict'

const express     = require('express')
,     path        = require('path')
,     publicDir   = path.join(__dirname, 'public')
,     app = express()

app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_IO_TOKEN))

process.env.PORT = process.env.PORT || 3030

app.get('/', (req, res) => res.sendFile('index.html', { root: publicDir }))

app.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT)
})
