const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();

let users = [];
let stories = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());


let apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});