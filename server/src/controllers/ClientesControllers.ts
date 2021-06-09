import { Request, Response } from 'express';
import pool from '../database';

class ClientesController {

    public async list(req: Request, res: Response): Promise<void> {
        const Busqueda = req.body.Busqueda;
        let clientes;
        clientes = await pool.query('SELECT * FROM clientes ORDER BY id DESC');

        if( Busqueda ){
            clientes = await pool.query(`SELECT * FROM clientes WHERE
             documento   LIKE '%${Busqueda}%' OR
             nombre      LIKE '%${Busqueda}%' OR
             direccion   LIKE '%${Busqueda}%' OR 
             telefono    LIKE '%${Busqueda}%' OR 
             email       LIKE '%${Busqueda}%' OR
             estado      LIKE '%${Busqueda}%' ORDER BY id DESC `);

        } 
        res.json(clientes);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clientes = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
        console.log(clientes.length);
        if (clientes.length > 0) {
            return res.json(clientes[0]);
        }
        res.status(404).json({ text: "El Cliente no Existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {

        const result = await pool.query('INSERT INTO clientes set ?', [req.body]);
        res.json({ message: 'Cliente Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldClient = req.body;
        await pool.query('UPDATE clientes set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Cliente Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
        res.json({ message: "Cliente Eliminado" });
    }
}

const clientesController = new ClientesController;
export default clientesController;
