const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Service 01!')
})

app.listen(port, () => {
  console.log(`Example service 01 listening on port ${port}`)
})