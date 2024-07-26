import { Request, Response } from 'express';
import Usuario, { IAlumnos } from '../../domain/models/alumnos';
import jwt from 'jsonwebtoken';

// Crear un nuevo usuario
export const crearAlumno = async (req: Request, res: Response) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    const token = jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h' });
    res.status(201).send({ usuario, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.find({});
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const usuario = await Usuario.findById(_id);
    if (!usuario) {
      return res.status(404).send();
    }
    res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Actualizar usuario basado en condiciones
export const actualizaralumno = async (req: Request, res: Response) => {
  const { id } = req.params; // Extraer el ID de los parámetros de la URL
  const updates = req.body; // Datos actualizados del cuerpo de la solicitud
  
  try {
    const usuario = await Usuario.findByIdAndUpdate(id, updates, { new: true });
    if (!usuario) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send(error);
  }
};