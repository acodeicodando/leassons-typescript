import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Rodrigo',
    email: 'rodrigo@rtoledo.inf.br',
    password: 'asdqwe123',
    techs: [
      'NodeJS', 'React', 'React Native',
      { title: 'Leason TypeScript', experience: 50 }
    ]
  });

  response.json({ message: 'Hello World' });
}