import * as dotenv from "dotenv";
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { prisma } from '../../../database/prismaClient';

dotenv.config();
interface IAuthDeliveryman{
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase{
  async execute({username, password}: IAuthDeliveryman){
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if(!deliverymanExist){
      throw new Error("Username incorrect!")
    }

    const passwordExist = await compare(password, deliverymanExist.password);

    if(!passwordExist){
      throw new Error("Password incorrect!")
    }

    const token = sign({username}, process.env.SECRET_DELIVERYMAN, {
      expiresIn: "1d",
      subject: deliverymanExist.id
    });

    return token;

  }
}