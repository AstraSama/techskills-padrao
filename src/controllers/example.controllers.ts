import { Request, Response } from "express";

class ExampleController {
    async example(req: Request, res: Response) {
        return res.send("Hello Typescript!");
    }
}

export {
    ExampleController
}