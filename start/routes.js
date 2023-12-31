'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * LOGIN ROUTES
 */
Route.group(() => {
  Route.post('login', 'TokenController.login')
  Route.post('logout', 'TokenController.logout')
})
  .prefix('api/admin')



// CLIENT
Route.group(() => {
  Route.get('products','ProductController.index')
  Route.get('products/active','ProductController.active')
  Route.post('orders','OrderController.store')

}).prefix('api/client')



// CMS - ADMIN
Route.group(() => {
  // GET
  Route.get('me', 'UserController.me')
  Route.resource('countries', 'CountryController')
    .apiOnly()
  Route.resource('users', 'UserController')
    .apiOnly()

  Route.resource('products', 'ProductController')
    .apiOnly()

    Route.resource('orders', 'OrderController')
    .apiOnly()

  Route.resource('file', 'FileController')
    .apiOnly()

  Route.resource('clients', 'ClientController')
  Route.resource('colors', 'ColorController')
  Route.get('clients/:id', 'ClientController.getClientById')
  Route.get('clients/:id/colors', 'ClientController.getClientColors')
  Route.post('clients/:id/colors', 'ClientController.addClientMultipleColors')
})
  .prefix('api/admin')
  .middleware(['auth'])
