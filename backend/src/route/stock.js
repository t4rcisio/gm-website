import { Router } from "express";

const stock = Router();

stock.get("/new", (request, response) => {
  response.status(200).send("Novo produto");
});

export default stock;
