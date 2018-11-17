const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

const users = {
  '001': {
    name: 'John',
    password: 'abcd',
    role: 'user'
  },
  '002': {
    name: 'Bob',
    password: '1234',
    role: 'admin'
  }
}

app.post('/api/v1/login', (req, res) => {
  const user = req.body;
  console.log(user)
  if (users.hasOwnProperty(user.id) && users[user.id].password === user.password) {
    const data = {
      token: 'this-is-sample-token',
      user: users[user.id]
    }
    res.send(data);
  } else {
    res.sendStatus(401)
  }
});

app.get('/api/v1/logout', (req, res) => {
  console.log('Logged out');
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Listening on port 3000'));
