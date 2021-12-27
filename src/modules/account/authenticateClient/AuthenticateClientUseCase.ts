import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { prisma } from '../../../database/prismaClient';

interface IAuthClient{
  username: string
  password: string
}

export class AuthenticateClientUseCase{
  async execute({username, password}: IAuthClient){
    const clientExist = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if(!clientExist){
      throw new Error("Username incorrect!")
    }

    const passwordExist = await compare(password, clientExist.password);

    if(!passwordExist){
      throw new Error("Password incorrect!")
    }

    const token = sign({username}, "9ds8fyd1s5af5ydf4u23h4u23b4jh4u", {
      expiresIn: "1d",
      subject: clientExist.id
    });

    return token;

  }
}