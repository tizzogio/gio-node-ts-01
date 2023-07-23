import { Request, Response } from 'express';
import * as yup from 'yup';
import './../../shared/services/TranslationsYup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}

interface IBodyProps {
  nome?: string;
}

const paramsValidation: yup.ObjectSchema<IParamProps> = yup.object({
  id: yup.number().integer().required().moreThan(0),
});

const bodyValidation: yup.ObjectSchema<IBodyProps> = yup.object({
  nome: yup.string().required().min(3),
});

//handler para validar
export const updateByIdValidation =  Validation({
  params: paramsValidation,
  body: bodyValidation
});

//export const getAll: RequestHandler = async (req, res) => {   //o :RequestHandler tira a necessidade de tipar direto na funcao "" porém da outra forma fica mais fácil tipar
export const updateById = async (req: Request<IParamProps,{},IBodyProps>, res: Response) => {

  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
