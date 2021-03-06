const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: v4(),
    title: title,
    url: url,
    techs: techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  // Find position of the repository in the repositories array
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  // Repository existence validation
  if (repositoryIndex < 0) {
    return response.status(400).json("Repository not found!");
  }

  const updatedRepository = {
    ...repositories[repositoryIndex],
    title: title,
    url: url,
    techs: techs,
  };

  repositories[repositoryIndex] = updatedRepository;

  return response.json(repositories[repositoryIndex]);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  // Find position of the repository in the repositories array
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  // Repository existence validation
  if (repositoryIndex < 0) {
    return response.status(400).json("Repository not found!");
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  // Find position of the repository in the repositories array
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  // Repository existence validation
  if (repositoryIndex < 0) {
    return response.status(400).json("Repository not found!");
  }

  const updateLike = {
    ...repositories[repositoryIndex],
    likes: repositories[repositoryIndex].likes + 1,
  };

  repositories[repositoryIndex] = updateLike;

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
