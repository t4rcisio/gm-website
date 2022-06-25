import { Router } from "express";

const client = Router();

client.get("/novo", (request, response) => {
  response.status(200).send("Novo");
});

export default client;
