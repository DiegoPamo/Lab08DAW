import MongoPersonaRepository from './infraestructure/MongoPersonaRepository'
import CrearPersona from './application/crearPersona'
import ObtenerPersona from './application/listarPersona'
import ObtenerUno from './application/obtenerUno'
import BorrarUno from './application/borrarUno'
import { schemaName } from './domain/validate'

const PersonaRepository = new MongoPersonaRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const crearPersona = async (req, res, next) => {
  try {
    const query = CrearPersona({ PersonaRepository })
    await schemaName.validateAsync(req.body)
    const persona = await query(req.body)
    res.status(201).json({
      data: persona,
      message: 'created'
    })
  } catch (e) {
    next(e)
  }
}

export const obtenerPersona = async (req, res, next) => {
  try {
    const query = ObtenerPersona({ PersonaRepository })
    const persona = await query(req.body)
    res.status(201).json({
      data: persona,
      message: 'datos obtenidos'
    })
  } catch (e) {
    next(e)
  }
}

export const obtenerUno = async (req, res, next) => {
  try {
    const id = req.params.id
    const query = ObtenerUno({ PersonaRepository })
    const persona = await query(id)
    res.status(201).json({
      data: persona,
      message: 'Persona Obtenida'
    })
  } catch (e) {
    next(e)
  }
}

export const borrarUno = async (req, res, next) => {
  try {
    const id = req.params.id
    const query = BorrarUno({ PersonaRepository })
    await query(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}
