import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  nombre: Joi.string().min(3).required(),
  matricula: Joi.string().min(6).max(6).required(),
  grado: Joi.string().min(1).required(),
  c1: Joi.string().min(1).required(),
  c2: Joi.string().min(1).required(),
  c3: Joi.string().min(1).required(),
});

export const validaralumno = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  next();
};
