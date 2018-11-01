import {Request, Response} from "express";

export class HelloWorld { 
    
    public routes(app): void { //received the express instance from app.ts file         
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send("Hello World!");
        });               
    }
}