import { RequestHandler } from 'express'; 
import { StatusCodes } from 'http-status-codes';
import { ObjectSchema, ValidationError }  from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query';

type TAllSchemas = Record<TProperty,ObjectSchema<any>>

//Usando type para sintax ficar melhor, mas poderia ser
//Partial para indicar que não precisa ser passado todos os valores, deixa vlores do "record" opcionais
type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;


export const Validation: TValidation = (schemas) =>  async (req, res, next) => {
  console.log('teste');

  const errorsResult: Record<string, Record<string, string>> = {};

  //entries para o loop no objeto.. tranformando um objeto em um array de arrays.. assim conseguiremos pegar todas as props da request que recebemos no express (body, query, params e header)
  //primeiro item do array é a chave e o segundo é o schema (que vem do objeto)
  Object.entries(schemas).forEach(([key, schema]) => {
    try{
      //validatSync não retorna promisse, espera validação acontecer e depois retorna o erro ou sucesso
      schema.validateSync(req[key as TProperty], {abortEarly: false});
      
    }catch(err){
      const yupError = err as ValidationError;
      const errors: Record<string, string> = {};
  
      yupError.inner.forEach(e => {
        if(!e.path) return;
        errors[e.path] = e.message;
      });

      errorsResult[key] = errors;
    }

  });

  if(Object.entries(errorsResult).length === 0)
    return next(); //executa próximo handler
  else
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });

};

/*
outro jeito

export const Validation: TValidation = () => {

  return async (req, res, next) => {
    console.log('teste');
  };

};

 */
