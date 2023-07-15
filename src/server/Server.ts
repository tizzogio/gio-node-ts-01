import express from 'express';

const server = express(); //instancia basica do servidor

server.get('/', (req, res) => {
  return res.send('Olá dev');
} );


export { server };