"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Color extends Model {
  static boot() {
    super.boot();
    this.addTrait("SoftDelete");
    this.addTrait("DomainObject");
  }

  clients() {
    return this.belongsToMany("App/Models/Client").pivotModel(
      "App/Models/ClientColor"
    );
  }
}

module.exports = Color;
