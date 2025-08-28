import { Router } from "express";
import { ExampleController } from "../controllers/example.controllers";

const exampleRoutes: Router = Router();

const examplelController = new ExampleController();

exampleRoutes.get("/hello-type", examplelController.example);

export {
    exampleRoutes
}