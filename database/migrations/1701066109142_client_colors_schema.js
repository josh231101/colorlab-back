"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClientColorsSchema extends Schema {
  up() {
    this.create("client_colors", (table) => {
      table.increments()
      table.integer("client_id").unsigned().notNullable()
      table
        .foreign("client_id")
        .references("id")
        .inTable("clients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.integer("color_id").unsigned().notNullable()
      table
        .foreign("color_id")
        .references("id")
        .inTable("colors")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.timestamps()
      table.dateTime("deleted_at")
    });
  }

  down() {
    this.drop("client_colors")
  }
}

module.exports = ClientColorsSchema;
