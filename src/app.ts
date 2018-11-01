import * as express from 'express';
import * as bodyParser from 'body-parser'; //used to parse the form data that you pass in the request
import {Request, Response} from "express";

class App {

    public app: express.Application;

    constructor() {
        this.app = express(); //run the express instance and store in app
        this.config();
        this.app.get('/', (req: Request, res: Response) => {            
            res.status(200).send("Hello World!");
        })  
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

}

export default new App().app;