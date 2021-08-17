const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../dist/MyFirstCICDApp/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/MyFirstCICDApp/index.html'))
})

app.get('/admin', (req, res) => {
  res.json({message: 'You are banned'})
})

app.listen(process.env.PORT || 8081);
