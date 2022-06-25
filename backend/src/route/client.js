import { Router } from "express";
import ClientController from "../controller/client.js";

const client = Router();
const controller = new ClientController();

client.post("/new", controller.NewUser.bind(controller));

export default client;
