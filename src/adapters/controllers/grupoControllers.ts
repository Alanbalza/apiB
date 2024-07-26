import { Request, Response } from 'express';
import Grupo, { IGrupos } from '../../domain/models/grupo';


export const crearGrupo = async (req: Request, res: Response) => {
    try {
        const grupo = new Grupo(req.body);
        await grupo.save();
        res.status(201).send(grupo);
    } catch (error) {
        res.status(400
        ).send(error);
    }
}


export const obtenerGrupos = async (req: Request, res: Response) => {
    try {
        const grupos = await Grupo.find({});
        res.status(200).send(grupos);
    } catch (error) {
        res
        .status
        (500).send(error);
    }
}

export const obtenerGrupoPorId = async (req: Request, res: Response) => {
    const _id = req.params.id;
    try {
        const grupo = await Grupo.findById(_id);
        if (!grupo) {
            return res.status(404).send();
        }
        res.status(200).send(grupo);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const actualizarGrupo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const grupo = await Grupo.findByIdAndUpdate(id, updates, { new: true });
        if (!grupo) {
            return res.status(404).send('Grupo no encontrado');
        }
        res.status(200).send(grupo);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const eliminarGrupo = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const grupo = await Grupo.findByIdAndDelete(id);
        if (!grupo) {
            return res.status(404).send('Grupo no encontrado');
        }
        res.status(200).send(grupo);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const obtenerGruposPorNombre = async (req: Request, res: Response) => {
    const { nombre } = req.params;
    try {
        const grupos = await Grupo.find({ nombre });
        if (!grupos) {
            return res.status(404).send('Grupo no encontrado');
        }
        res.status(200).send(grupos);
    } catch (error) {
        res.status(500).send(error);
    }
}


