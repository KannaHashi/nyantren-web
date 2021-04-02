const express = require('express');
const cors = require('cors')
const app = express();

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

app.use(cors(), config);

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  }, config);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
