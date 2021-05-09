import express from 'express'
import { crearPersona, obtenerPersona, obtenerUno, borrarUno } from '../components/notas/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/personas', obtenerPersona)

router.get('/api/personas/:id', obtenerUno)

router.post('/api/personas', crearPersona)

router.get('/info', (_, res) => {
  const persons = obtenerPersona.length
  res.send('<h3>PhoneBook has info for ' + persons + ' people</h3>' + '<h3>Hora de la Solicitud ' + new Date() + '</h3>')
})

router.delete('/api/personas/:id', borrarUno)

export default router
