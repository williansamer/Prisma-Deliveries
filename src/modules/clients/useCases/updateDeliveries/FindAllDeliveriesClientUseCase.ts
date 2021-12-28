import { prisma } from "../../../../database/prismaClient"

export class FindAllDeliveriesClientUseCase{
  async execute(id_client: string){
    const deliveries = prisma.clients.findMany({
      where: {
        id: id_client
      },
      select: {
        deliveries: true,
        id: true,
        username: true
      }
    })

    return deliveries
  }

}