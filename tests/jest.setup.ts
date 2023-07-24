import supertest from 'supertest';
import { server } from '../src/server/Server';



export const testServer = supertest(server); 

//Import server precisar acontecer antes do listen do servidor, por isso inclusive estão em arquivos separados.
