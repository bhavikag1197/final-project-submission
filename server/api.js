const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./utils/db')
const dao = require('./dao/dao');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

var app = express();

app.use(new bodyParser());
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello smart world!!');
});

app.get('/countries', (req, res) => {
  dao.findAllCountries((err,countries) => {
    console.log('countries' + countries);
    res.send(countries);
  });
});


app.get('/cities/:country', (req, res) => {
  var country = req.params.country;
  console.log(`country: ${country}`);
   dao.findAllCitiesByCountry(country,(err,cities) => {
    res.send(cities);
  });
});

app.listen(4000, () => {
  console.log('listening on port 4000');
});

try {
  db.connect();
} catch (err) {
  console.log(err)
  process.exit(0)
}
