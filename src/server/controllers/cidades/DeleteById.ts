import { Request, Response } from 'express';
import * as yup from 'yup';
import './../../shared/services/TranslationsYup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}

const queryValidation: yup.ObjectSchema<IParamProps> = yup.object({
  id: yup.number().integer().required().moreThan(0),
});

//handler para validar
export const deleteByIdValidation =  Validation({
  params: queryValidation,
});

//export const getAll: RequestHandler = async (req, res) => {   //o :RequestHandler tira a necessidade de tipar direto na funcao "" porém da outra forma fica mais fácil tipar
export const deleteById = async (req: Request<IParamProps>, res: Response) => {

  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementadowww');
};
