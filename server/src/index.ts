import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//import passport from "passport";

import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clientes'; 



const flash = require('connect-flash');
const session = require('express-session');
const { database } = require('./keys');
const MySQLStore = require('express-mysql-session')(session);

 
class Server {


    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes(); 
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));


    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/clientes', clientesRoutes);  
        //this.app.use('/', clientesRoutes); 
        
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
