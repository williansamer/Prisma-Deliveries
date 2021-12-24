import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";


export class CreateDeliverymanController{
  async handle(request: Request, response: Response){
    const {username, password} = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute({
      username, password
    })

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}