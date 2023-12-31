'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('first_name',254)
      table.string('last_name',254)
      table.enum('gender', ['H','M','O'])
      table.date('birth_date')
      table.string('phone', 254)
      table.timestamps()
      table.dateTime('deleted_at')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
