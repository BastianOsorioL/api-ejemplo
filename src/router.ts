import express from 'express';

export const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Hola ${req.body.name} estás haciendo un metódo POST`);
});

router.put('/', (req, res) => {
  console.log('ENTRÓ A PUT');
  res.send('Estás haciendo un metódo PUT');
});
