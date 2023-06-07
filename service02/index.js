const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Service 02!</h1><pre>' + JSON.stringify(process.env, null, 4))
})

app.listen(port, () => {
  console.log(`Example service 02 listening on port ${port}`)
})