import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router =  Router();

router.get('/', (req, res) => {
  return res.send('Olá dev');
} );

router.get('/teste/:id', (req, res) => {

  console.log(req.params);
  

  return res.status(StatusCodes.ACCEPTED).json('OI');

} );

router.get('/qp', (req, res) => {

  console.log(req.query.teste);
  

  return res.status(200).json(req.body);

} );

router.post('/', (req, res) => {
  const { body } = req;

  console.log(body);

  return res.status(201).json('OI');


  // res.status(201).json({ data: response });
} );


export  { router };
 
// colocar um header e params tb sendo recebidos
