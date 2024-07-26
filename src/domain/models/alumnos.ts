import { Document, Schema, model } from 'mongoose';

// Definir la interfaz para el modelo Usuario
export interface IAlumnos extends Document {
  id: string;
  nombre: string;
  matricula: string | number;
  grado: string | number;
  c1: string | number;
  c2: string | number;
  c3: string | number;
  
}

// Definir el esquema para el modelo Usuario
const usuarioSchema = new Schema<IAlumnos>({
  nombre: {
    type: String,
    required: true,
  },
  matricula: {
    type: Schema.Types.Mixed,
    required: true,
  },
  grado:{
    type: Schema.Types.Mixed,
    required: true,
  },
  c1: {
    type: Schema.Types.Mixed,
    required: true,
  },
  c2: {
    type: Schema.Types.Mixed,
    required: true,
  },
  c3: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

// Definir el modelo Usuario
const Alumnos = model<IAlumnos>('Alumnos', usuarioSchema);

export default Alumnos;
