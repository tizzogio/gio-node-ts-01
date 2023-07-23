import { Router } from 'express';
//import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

//CidadesController.create();

const router =  Router();

router.get('/', (req, res) => {
  return res.send('Olá dev, serviço no ar');
} );

// router.get('/teste/:id', (req, res) => {

//   console.log(req.params);
  

//   return res.status(StatusCodes.ACCEPTED).json('OI');

// } );

// router.get('/qp', (req, res) => {

//   console.log(req.query.teste);
  

//   return res.status(200).json(req.body);

// } );

router.post('/cidades', CidadesController.createValidation, CidadesController.create); //usar o next para ir para o próximo handler
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById); // definindo param na rota
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);

export  { router };
 
// colocar um header e params tb sendo recebidos
