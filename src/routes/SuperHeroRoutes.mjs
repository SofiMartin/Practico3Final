import express from 'express';

import {
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroePorIdController,
    obtenerSuperheroesMayoresDe30Controller,
    obtenerTodosLosSuperheroesController
} from '../controllers/superheroesControllers.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
router.get('/heroes/edad/mayores30',obtenerSuperheroesMayoresDe30Controller);

export default router;
