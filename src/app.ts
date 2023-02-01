import  express, { type Application} from "express";
import { config } from "dotenv";
import cors from "cors";

config();

const app : Application = express();


app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
});

export default app;