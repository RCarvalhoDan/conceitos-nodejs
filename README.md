## GoStack 13 - Desafio 02: Conceitos de Node.js

Esse projeto foi implementado para o Desafio 02 do bootcamp GoStack13 da Rocketseat. O objetivo aqui é praticar o que foi explicado sobre Node.js implementando rotas numa aplicação Express.js simples que irá armazenar repositórios do GitHub. Ela irá permitir a criação, listagem e remoção dos repositórios, e permitir que os repositórios possam receber likes.

## Rotas

**`GET /repositories`**: Rota que lista todos os repositórios;

**`POST /repositories`**: A rota recebe `title` (título do repositório), `url` (link do GitHub para o repositório) e `techs` (tecnologias utilizadas). Cada projeto é armazenado em um objeto com o formato: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`;

**`POST /repositories/:id/like`**: Toda vez que a rota é acessada, o repositório com o `id` passado nos parâmetros da rota deve ter seu número de likes atualizado e aumentado em 1. Essa rota é passada como `POST` ao invés de `PUT/PATCH` para simular a criação de um `like`. Aqui `like` é criado com uma entidade separada de `repositories`.

**`PUT /repositories/:id`**: A rota irá atualizar apenas o `title`, a `url` e as `techs` do repositório com o `id` passado nos parâmetros da rota.

**`DELETE /repositories/:id`**: A rota deleta o repositório com o `id` presente nos parâmetros da rota;
