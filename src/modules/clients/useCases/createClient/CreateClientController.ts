import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";


export class CreateClientController{
  async handle(request: Request, response: Response){
    const {username, password} = request.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      username, 
      password
    })

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }
    
    return response.json(result)
  }
}