import { StatusCodes } from 'http-status-codes';
import {testServer } from '../jest.setup';

describe('Cidades - Create', () => {



  it('Criar registro', async () => {

    const res = await testServer
      .post('/cidades')
      .send({
        nome: 'Itapecerica da Serra'
      });

    expect(res.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof(res.body)).toEqual('number');
    
  });

  it('Nome curto', async () => {

    const res = await testServer
      .post('/cidades')
      .send({
        nome: 'oi'
      });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty('errors.body.nome');
    
  });
  
});
