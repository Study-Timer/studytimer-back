
# Study Timer

Contabilize suas horas de estudo através do Study Timer. 


## Como rodar o projeto

Ao clonar o repositório, utilize o seguinte comando para baixar as dependencias: 


```bash
  npm install
```

## Suba o container docker

Utilize o seguinte comando: 

```bash
  docker run --name studytimer-db -p 5432:5432 -e POSTGRES_PASSWORD=studytimer -e POSTGRES_USER=studytimer -e POSTGRES_DB=studytimer-db -d postgres
```


## Execute as migrations para criar as tabelas no banco de dados

O banco de dados está em um container no docker, mas sem tabelas, portanto rode as migrations com o comando abaixo para que as tabelas sejam criadas. 



```bash
  npx sequelize-cli db:migrate
```




  
## Feedback

If you have any feedback, please reach out to us at fake@fake.com
