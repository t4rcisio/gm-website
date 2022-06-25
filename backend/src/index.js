import express from "express";
import dotenv from "dotenv";
import router from "./route/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
  response.send("<h1>GOTA MÁGICA</h1><br/><h5>cosméticos & perfumaria</h5>");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
