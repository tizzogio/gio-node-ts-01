import { RequestHandler } from 'express';
import * as yup from 'yup';
import './../../shared/services/TranslationsYup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
  nome: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object({
  nome: yup.string().required().min(3),
});

//handler para validar
export const createValidation =  Validation({
  body: bodyValidation,
});

//export const create = async (req: Request<{},{},ICidade>, res: Response) => { //o :RequestHandler tira a necessidade de tipar direto na funcao ""
export const create: RequestHandler = async (req, res) => { 

  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
