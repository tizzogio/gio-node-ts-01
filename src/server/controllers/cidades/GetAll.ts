import { Request, Response } from 'express';
import * as yup from 'yup';
import './../../shared/services/TranslationsYup';
import { Validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const queryValidation: yup.ObjectSchema<IQueryProps> = yup.object({
  page: yup.number().moreThan(0),
  limit: yup.number().moreThan(0),
  filter: yup.string(),
});

//handler para validar
export const getAllValidation =  Validation({
  query: queryValidation,
});

//export const getAll: RequestHandler = async (req, res) => {   //o :RequestHandler tira a necessidade de tipar direto na funcao "" porém da outra forma fica mais fácil tipar
export const getAll = async (req: Request<{},{},{},IQueryProps>, res: Response) => {

  console.log(req.query);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementadowww');
};
