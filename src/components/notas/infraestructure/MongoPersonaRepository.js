import MongoLib from '../../../lib/mongo'

class MongoPersonaRepository {
  constructor () {
    this.collection = 'persona'
    this.mongoDB = new MongoLib()
  }

  async add (persona) {
    const id = await this.mongoDB.create(this.collection, persona)
    return { id, ...persona }
  }

  async all () {
    const todos = await this.mongoDB.getAll(this.collection)
    return { todos }
  }

  async obtenUno (unica) {
    return await this.mongoDB.get(this.collection, unica)
  }

  async borrarUno (borrada) {
    return await this.mongoDB.delete(this.collection, borrada)
  }
}

export default MongoPersonaRepository
