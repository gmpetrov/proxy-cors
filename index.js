const express = require('express');
const cors = require('cors');
const { expressForward } = require('express-forward');

const PORT = 4242;
const app = express();

app.use(
  cors({
    allowedHeaders: [
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization'
    ]
  })
);

expressForward('proxy-cors', app);

app.listen(process.env.PORT || PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
