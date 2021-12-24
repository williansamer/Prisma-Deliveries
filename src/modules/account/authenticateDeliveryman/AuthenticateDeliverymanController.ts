import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController{
  async handle(request: Request, response: Response){
    const { username, password} = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateDeliverymanUseCase.execute({
      username, password
    })

    if(result instanceof Error){
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}