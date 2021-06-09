"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientesControllers_1 = __importDefault(require("../controllers/ClientesControllers"));
class ClientesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/Lista', ClientesControllers_1.default.list);
        this.router.get('/:id', ClientesControllers_1.default.getOne);
        this.router.post('/', ClientesControllers_1.default.create);
        this.router.put('/:id', ClientesControllers_1.default.update);
        this.router.delete('/:id', ClientesControllers_1.default.delete);
    }
}
exports.default = new ClientesRoutes().router;
