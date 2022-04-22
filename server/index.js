import express from 'express';
import { getData, saveData } from './utils/files.mjs';
import bodyParser from 'body-parser';
import cors from 'cors';

const jsonParser = bodyParser.json();
const app = express();
const port = 3000;

// Enables CORS
app.use(cors());

app.get('/api/todos', cors(), function (req, res) {
  getData('data/todos.json', 'utf8').then((data) => {
    res.json(JSON.parse(data));
  }).catch(e => console.log(e))
});

app.post('/api/todos', jsonParser, function(req, res) {
  saveData('data/todos.json', JSON.stringify(req.body, null, 2)).then(() => {
    res.send({ status: 'OK', todos: req.body })
  })
});

app.listen(port, function () {
  console.log(`App is listening on port ${port}!`);
});