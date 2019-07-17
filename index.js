const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 4242;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(async (req, res) => {
  try {
    const method = req.method;
    const data = req.body;
    const url = req.path.replace(/^\//, '');

    const response = await axios({
      method,
      url,
      data
    });

    console.log('response', response.data);

    return res.json(response.data);
  } catch (err) {
    console.log('err', err);

    return res.json(err);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
