import { Router } from 'express';
import { crearAlumno, obtenerUsuarios, obtenerUsuarioPorId} from '../controllers/alumnoController';

import { validaralumno } from '../middlewares/validaralumno';
import { authMiddleware } from '../middlewares/authMiddleware';
import { actualizaralumno } from '../controllers/alumnoController';
const router = Router();

router.post('/alumnos', validaralumno, crearAlumno);
router.get('/alumnos', authMiddleware, obtenerUsuarios);
router.get('/alumnos/:id', authMiddleware, obtenerUsuarioPorId);
router.put('/alumnos/:id', actualizaralumno);


export default router;
