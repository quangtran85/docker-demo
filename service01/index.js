const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('<h1>Service 01!</h1>')
})

app.listen(port, () => {
  console.log(`Example service 01 listening on port ${port}`)
})