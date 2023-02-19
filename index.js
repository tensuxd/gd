const fs = require('fs')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', '/pages')

app.get('/',(req, res) => {
  res.render(__dirname + '/home', {name: 'Dany', id: 4})
})

app.get('/sponsors',(req, res) => {
  res.render(__dirname + '/sponsors')
})

let port = 8080;
app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:` + port);
})

