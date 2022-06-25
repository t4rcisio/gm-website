import { Router } from "express";
import client from "./client.js";
import stock from "./stock.js";

const router = Router();

router.use("/client", client);
router.use("/stock", stock);

export default router;
