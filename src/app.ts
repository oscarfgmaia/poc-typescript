import express, { json } from "express";
import cors from "cors";
import router from "./routes/paymentRoute.js";
const app = express();
app.use(json())
app.use(cors());
app.get("/health", (req, res) => res.send("ok"));
app.use(router)

app.listen(4000, () => console.log("Running on port 4000"));
