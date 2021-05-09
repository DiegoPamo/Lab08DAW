/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonaRepository')} obj.PersonaRepository
 */
export default ({ PersonaRepository }) => {
  return async (borrada) => {
    return await PersonaRepository.borrarUno(borrada)
  }
}
