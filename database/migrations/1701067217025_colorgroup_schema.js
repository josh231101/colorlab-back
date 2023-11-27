'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColorgroupSchema extends Schema {
  up () {
    this.table('colors', (table) => {
      // alter table
      table.integer('group_id').unsigned().notNullable()
      table
        .foreign("group_id")
        .references("id")
        .inTable("color_groups")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
  }

  down () {
    this.table('colors', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ColorgroupSchema
