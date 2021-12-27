import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
  if(err instanceof Error){
    return response.status(400).json(err.message)
  }

  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error"
  })
})

app.listen(3000, ()=>{
  console.log("Server running on port 3000");
})