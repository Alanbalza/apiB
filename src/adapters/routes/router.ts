import { Router } from 'express';
import { crearAlumno, obtenerUsuarios, obtenerUsuarioPorId} from '../controllers/alumnoController';
import { crearGrupo, obtenerGrupoPorId, obtenerGrupos, actualizarGrupo, eliminarGrupo, obtenerGruposPorNombre } from '../controllers/grupoControllers';
import { validaralumno } from '../middlewares/validaralumno';
import { authMiddleware } from '../middlewares/authMiddleware';
import { actualizaralumno } from '../controllers/alumnoController';
const router = Router();

router.post('/alumnos', validaralumno, crearAlumno);
router.get('/alumnos', authMiddleware, obtenerUsuarios);
router.get('/alumnos/:id', authMiddleware, obtenerUsuarioPorId);
router.put('/alumnos/:id', actualizaralumno);

router.post('/grupos', crearGrupo);
router.get('/grupos', obtenerGrupos);
router.get('/grupos/:id', obtenerGrupoPorId);
router.get('/grupos/nombre/:nombre', obtenerGruposPorNombre);
router.put('/grupos/:id', actualizarGrupo);
router.delete('/grupos/:id', eliminarGrupo);

export default router;
