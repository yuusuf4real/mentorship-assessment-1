class Model {
  static create(record) {
    throw new Exception('Method need to be overriden in child classes');
  }
}

module.exports = Model;
