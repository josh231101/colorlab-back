"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Client extends Model {
  static boot() {
    super.boot();
    this.addTrait("SoftDelete");
    this.addTrait("DomainObject");
  }

  static get hidden() {
    return ["created_at", "deleted_at"];
  }

  colors() {
    return this.belongsToMany("App/Models/Color").pivotModel(
        "App/Models/ClientColor"
    );
  }
}

module.exports = Client;
