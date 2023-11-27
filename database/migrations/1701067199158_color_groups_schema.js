'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColorGroupsSchema extends Schema {
  up () {
    this.create('color_groups', (table) => {
      table.increments()
      table.string('name', 254)
      table.timestamps()
      table.dateTime('deleted_at')
    })
  }

  down () {
    this.drop('color_groups')
  }
}

module.exports = ColorGroupsSchema
