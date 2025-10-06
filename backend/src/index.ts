import express from "express";
import dotenv from "dotenv";
import router from "./employees/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Aditya!");
});

app.use("/api/employees", router);

app.listen(PORT, () => {
  console.log(`App is runining on port ${PORT}`);
});
