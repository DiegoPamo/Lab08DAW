/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonaRepository')} obj.PersonaRepository
 */
export default ({ PersonaRepository }) => {
  return async (unica) => {
    return await PersonaRepository.obtenUno(unica)
  }
}
