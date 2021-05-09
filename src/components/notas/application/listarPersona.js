/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonaRepository')} obj.PersonaRepository
 */
export default ({ PersonaRepository }) => {
  return async () => {
    return await PersonaRepository.all()
  }
}
