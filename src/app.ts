import express, { Express, NextFunction, Request, Response }  from "express";
import { routes } from "./routes/routes";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import cors from "cors";

const app: Express = express();

const filelog = fs.createWriteStream(path.join(__dirname, "storage", "acess.log"), { flags: "a" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("combined", { stream: filelog }));

// Configurações das rotas
app.use(routes);

// Tratativa de erro
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.status(400).json({
            msg: "Ocorreu um erro!",
            error: err.message
        })
    }

    next();
})

export { app };