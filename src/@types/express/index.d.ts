//Adicionando um novo tipo para o Request. Para isso, criamos um novo arquivo de tipo, chamado "index.d.ts", e adicionamos o tipo que queremos adicionar.

declare namespace Express{ //Pegando o namespace Express
  export interface Request{ //Pegando o Request do Express e adicionando um novo atributo
    id_client: string //Definindo o atributo id_client que será do tipo string
  }
}