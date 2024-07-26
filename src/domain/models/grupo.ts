import { Document, Schema, model } from 'mongoose';

export interface IGrupos extends Document {
    grupo: string;
    descripcion: string;
    horario: string;
    materia: string
}

const grupoSchema = new Schema<IGrupos>({
    grupo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    materia: {
        type: String,
        required: true
    }
});

const Grupo = model<IGrupos>('Grupo', grupoSchema);

export default Grupo;