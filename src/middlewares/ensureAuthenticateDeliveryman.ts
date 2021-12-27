import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface IPayLoad{
  sub: string
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction){
  const authDeliveryman = request.headers.authorization;

  if(!authDeliveryman){
    return response.status(401).json({
      message: "Token missing"
    })
  }

  const [,token] = authDeliveryman.split(" ");

  try {
    const { sub } = verify(token, "9ds8fyd1s5af5ydf4u23h4u23bwso34") as IPayLoad;

    request.id_deliveryman = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid Token"
    })
  }

}