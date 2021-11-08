const express = require('express')
const app = express()
const port = 4000
const fetch = require('node-fetch')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

fetch(//notsure what goes in here)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
