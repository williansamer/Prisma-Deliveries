import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { prisma } from '../../../database/prismaClient';

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

    const token = sign({username}, "9ds8fyd1s5af5ydf4u23h4u23bwso34", {
      expiresIn: "1d",
      subject: deliverymanExist.id
    });

    return token;

  }
}