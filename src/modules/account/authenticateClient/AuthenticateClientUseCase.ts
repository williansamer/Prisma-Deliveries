import * as dotenv from "dotenv";
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { prisma } from '../../../database/prismaClient';

dotenv.config();
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

    const token = sign({username}, process.env.SECRET_CLIENT, {
      expiresIn: "1d",
      subject: clientExist.id
    });

    return token;

  }
}