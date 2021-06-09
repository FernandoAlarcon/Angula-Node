"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClientesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Busqueda = req.body.Busqueda;
            let clientes;
            clientes = yield database_1.default.query('SELECT * FROM clientes ORDER BY id DESC');
            if (Busqueda) {
                clientes = yield database_1.default.query(`SELECT * FROM clientes WHERE
             documento   LIKE '%${Busqueda}%' OR
             nombre      LIKE '%${Busqueda}%' OR
             direccion   LIKE '%${Busqueda}%' OR 
             telefono    LIKE '%${Busqueda}%' OR 
             email       LIKE '%${Busqueda}%' OR
             estado      LIKE '%${Busqueda}%' ORDER BY id DESC `);
            }
            res.json(clientes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const clientes = yield database_1.default.query('SELECT * FROM clientes WHERE id = ?', [id]);
            console.log(clientes.length);
            if (clientes.length > 0) {
                return res.json(clientes[0]);
            }
            res.status(404).json({ text: "El Cliente no Existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO clientes set ?', [req.body]);
            res.json({ message: 'Cliente Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldClient = req.body;
            yield database_1.default.query('UPDATE clientes set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "Cliente Actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM clientes WHERE id = ?', [id]);
            res.json({ message: "Cliente Eliminado" });
        });
    }
}
const clientesController = new ClientesController;
exports.default = clientesController;
