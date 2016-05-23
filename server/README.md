#### Dependency Summary
| Package | Explanation |
| ------- | ----------- |
| bcryptjs | Encryption for user authentication; this library works on machines running Windows |
| bluebird | Promise library |
| body-parser | Middleware for decoding JSON |
| change-case | String manipulation |
| compression | Reduces size of response body |
| express | Web framework that makes it easy to write secure, modular, and fast applications |
| helmet | Secures HTTP headers |
| lodash | Simplifies iterating over arrays, objects, and strings |
| mongoose | MongoDB API |
| require-dir | Automatically require all files in a directory |
| serve-favicon | Serves a favicon |
| serve-static | Efficient serving of static files |

#### Dev Dependency Summary
| Package | Explanation |
| ------- | ----------- |
| chai | Assertion library |
| mocha | Test framework (watch with mocha --watch) |
| morgan | HTTP request logger |
| supertest | REST test framework |

#### Routes
* JSON is returned in the following format: {error: value, data: {value}}

| HTTP VERB | PATH | ACTION | RETURN VALUE |
| --------- | ---- | ------ | ------------ |
| GET | / | Retrieve root | String |
| GET | /* | Unregistered routes | Custom 404 page |
| GET | /api/users | Retrieve all users | JSON object |
| POST | /api/users | Create user | JSON object |
| GET | /api/users/:id | Retrieve user with specified ID | JSON object |
| PUT | /api/users/:id | Update user with specified ID | JSON object |
| DELETE | /api/users/:id | Remove user with specified ID | JSON object |
| GET | /api/users/email/:email | Retrieve user with specified email | JSON object |
| GET | /api/users/:id/lists | Retrieve all lists associated with user | JSON object |
| GET | /api/users/:id/categories | Retrieve all categories associated with user | JSON object |
| GET | /api/users/:id/items | Retrieve all items associated with user | JSON object |
| GET | /api/lists | Retrieve all lists | JSON object |
| POST | /api/lists | Create list | JSON object |
| GET | /api/lists/:id | Retrieve list with specified ID | JSON object |
| PUT | /api/lists/:id | Update list with specified ID | JSON object |
| DELETE | /api/lists/:id | Remove list with specified ID | JSON object |
| GET | /api/categories | Retrieve all categories | JSON object |
| POST | /api/categories | Create category | JSON object |
| GET | /api/categories/:id | Retrieve category with specified ID | JSON object |
| PUT | /api/categories/:id | Update category with specified ID | JSON object |
| DELETE | /api/categories/:id | Remove category with specified ID | JSON object |
| GET | /api/items | Retrieve all items | JSON object |
| POST | /api/items | Create item | JSON object |
| GET | /api/items/:id | Retrieve item with specified ID | JSON object |
| PUT | /api/items/:id | Update item with specified ID | JSON object |
| DELETE | /api/items/:id | Remove item with specified ID | JSON object |

#### Mongoose Details
* Functions return 'null' if a user is not found

#### Error Handling
* Specified in app.js

#### Issues
* Unhandled exception if incorrect Mongoose user credentials
	* Does not get caught by global error handler in app.js

#### TODO
* App structure should be:
	* Require dependencies
	* Require middleware
	* Create app
	* Configure and enable middleware
	* Require routes
	* Include error handling
	* Start server
* Password hashing on POST user
* Password rehashing on PUT user && password.isModified
* Figure out security:
	* CORS
	* csurf
