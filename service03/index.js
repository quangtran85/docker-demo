const express = require('express')
const app = express()
const port = 3102

app.get('/', (req, res) => {
  res.send('<h1>Service 03!</h1>')
})

app.listen(port, () => {
  console.log(`Example service 03 listening on port ${port}`)
})