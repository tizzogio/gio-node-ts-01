import { RequestHandler } from 'express';
import * as yup from 'yup';
import './../../shared/services/TranslationsYup';
import { Validation } from '../../shared/middleware';

interface ICidade {
  nome: string;
  estado: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object({
  nome: yup.string().required().min(3),
  estado: yup.string().required().length(2),
});

//handler para validar
export const createValidation =  Validation({
  body: bodyValidation,
});

//export const create = async (req: Request<{},{},ICidade>, res: Response) => { //o :RequestHandler tira a necessidade de tipar direto na funcao ""
export const create: RequestHandler = async (req, res) => { 

  console.log(req.body);

  return res.send('Create');
};
