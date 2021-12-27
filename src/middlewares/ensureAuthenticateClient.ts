import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface IPayLoad{
  sub: string
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction){
  const authClient = request.headers.authorization;

  if(!authClient){
    return response.status(401).json({
      message: "Token Missing"
    })
  }

  //[0] - Bearer
  //[1] - Token
  const [,token] = authClient.split(" "); // Separa pelo espaço
  try {
    const { sub } = verify(token, "9ds8fyd1s5af5ydf4u23h4u23b4jh4u") as IPayLoad; // sub é o id do client. Definindo que o 'sub' é do tipo string

    request.id_client = sub; // Criado um novo 'type' no Request pelo arquivo 'index.d.ts'
    return next();

  } catch (error) {
    return response.status(401).json({
      message: "Invalid Token"
    })
  }

}