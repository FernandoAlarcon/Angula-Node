import express ,{ Router } from "express";
import clientesController from '../controllers/ClientesControllers';

class ClientesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(){
        this.router.post('/Lista', clientesController.list);
        this.router.get('/:id', clientesController.getOne);
        this.router.post('/', clientesController.create);
        this.router.put('/:id', clientesController.update);
        this.router.delete('/:id', clientesController.delete);
    }

}

export default new ClientesRoutes().router;
