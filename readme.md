# PROJETO - ENTREGA


____________________________________________________________________
## Estrutura do projeto:
>>  "devDependencies": {
>>    "@types/bcrypt": "^5.0.0",
>>    "@types/express": "^4.17.13",
>>    "@types/jsonwebtoken": "^8.5.6",
>>    "prisma": "^3.7.0",
>>    "ts-node-dev": "^1.1.8",
>>    "typescript": "^4.5.4"
>>  },
>>  "dependencies": {
>>    "@prisma/client": "^3.7.0",
>>    "bcrypt": "^5.0.1",
>>    "express": "^4.17.2",
>>    "jsonwebtoken": "^8.5.1"
>>}

- OBS 1: Instale o tsconfig: 'yarn tsc --init'
- OBS: Pesquise na doc do prisma para saber como modificar o tsconfig para o prisma funcionar.
____________________________________________________________________
## Crie container no docker:
docker run --name prisma -p 5432:5432 -e POSTGRES_PASSWORD=admin -d admin

_________________________________________________
### Comandos no terminal:
Ao criar o schema, rode no terminal..
> yarn prisma migrate dev (para criar o banco de dados)

> yarn prisma format (para formatar o banco de dados)

_________________________________________________
### Crie um script para rodar o projeto:

>> "scripts": {
>>   "dev": "ts-node-dev --exit-child --transpile-only --ignore-watch node_modules src/server.ts"
>> },
____________________________________________________________________
## Criando Clients e Deliveryman:
> Crie o UseCase e Controller(que são as regras de negócio).

> Crie as rotas.

> Teste no insomnia.
> Depois de pronto, rode o "yarn prisma studio" para verificar se deu tudo certo.

____________________________________________________________________
