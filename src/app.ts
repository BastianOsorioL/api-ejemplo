import bodyParser from 'body-parser';
import express from 'express';
import { router } from './router';

export const app = express();

app.get('/', (req, res) => res.send('Conectado correctamente'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
