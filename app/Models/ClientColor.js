"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ClientColor extends Model {
  static table = "client_colors";
  static get table() {
    return "client_colors";
  }
  static boot() {
    super.boot();
    this.addTrait("SoftDelete");
    this.addTrait("DomainObject");
  }

  clients() {
    return this.belongsTo("App/Models/Client");
  }
  colors() {
    return this.belongsTo("App/Models/Color");
  }
}

module.exports = ClientColor;
