'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColorsSchema extends Schema {
  up () {
    this.create('colors', (table) => {
      table.increments()
      table.string('code',254)
      table.json('bases')
      table.timestamps()
      table.dateTime('deleted_at')
    })
  }

  down () {
    this.drop('colors')
  }
}

module.exports = ColorsSchema
