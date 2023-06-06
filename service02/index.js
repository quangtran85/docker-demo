const express = require('express')
const app = express()
const port = 3101

app.get('/', (req, res) => {
  res.send('Service 02!')
})

app.listen(port, () => {
  console.log(`Example service 02 listening on port ${port}`)
})