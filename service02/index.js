const express = require('express')
const app = express()
const port = 3000

app.get('/service02', async (req, res) => {
  const srv1Res = await fetch(`http://${process.env.SRV1_HOST}/service01`);
  const content = await srv1Res.text();

  res.send(`
    <h1>Service 02!</h1><pre>${JSON.stringify(process.env, null, 4)}</pre>
    <br><br>
    <h4>Service01 Response</h4><pre>${content}</pre>
  `)
})

app.listen(port, () => {
  console.log(`Example service 02 listening on port ${port}`)
})