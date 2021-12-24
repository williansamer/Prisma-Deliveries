import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    //Validar o client
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          endsWith: username,
          mode: "insensitive"
        }
      },
    }); 

    if (clientExist) {
      return new Error("Client already exists!");
    }

    //Criptografar o password
    const hashPassword = await hash(password, 10);

    //Criar o Client(save)
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client
  }
}
