/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonaRepository')} obj.PersonaRepository
 */
export default ({ PersonaRepository }) => {
  return async ({ name, number }) => {
    const nuevaPersona = {
      name: name,
      number: number
    }
    return await PersonaRepository.add(nuevaPersona)
  }
}
