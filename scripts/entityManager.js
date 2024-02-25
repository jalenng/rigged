class EntityManager {
  constructor() {
    this.entities = {};
  }
  add(entity) {
    this.entities[entity.name] = entity;
  }
  getEntity(name) {
    return this.entities[name];
  }
}