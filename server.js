const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/segment', (req, res) => {
  return res.status(200).json({
    message: 'hello new project',
    response: req.body
  })
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});