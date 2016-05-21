#### Dependency Summary
| Package | Explanation |
| ------- | ----------- |
| bcryptjs | Encryption for user authentication; this library works on machines running Windows |
| bluebird | Promise library |
| body-parser | Middleware for decoding JSON |
| change-case | String manipulation |
| compression | Reduces size of response body |
| cors | Allow cross origin requests | 
| express | Web framework that makes it easy to write secure, modular, and fast applications |
| helmet | Secures HTTP headers |
| lodash | Simplifies iterating over arrays, objects, and strings |
| mongoose | Object-oriented database API |
| passport, passport-* | User authentication |
| path | Handles and transforms file paths |
| require-dir | Automatically require all files in a directory |
| serve-favicon | Serves a favicon |
| serve-static | Efficient serving of static files |

#### Dev Dependency Summary
| Package | Explanation |
| ------- | ----------- |
| morgan | HTTP request logger |

#### Routes
* JSON is returned in the following format: {error: <value>, data: <value>}

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

#### Misc
In user controller, if password has changed, then hash it
In model, for new users always hash password
For consistency, maybe only call hash function from controller?

Error checking on front-end
If !error && data == null, then user not found
If !error && data != null, then an actual error

Perhaps add specific dev routes on the backend? E.g. routes that will
never get called from a client application

#### Mongoose
* Functions return 'null' if a user is not found
* Can be checked with:
```javascript
if (user) {
  res.json({ error: false, data: user });
} else {
  next('User does not exist');
}
```
* Instead of returning null, an error can be returned using errorHandler indicating 'User DNE'
	* Alternatively, findOneAndUpdate is the only one we need because of pre-hook support
	The other two can be replaced with findByIdAndUpdate and findById
* Promisify should not be used with Mongoose >= 4.1.0 - UPDATE THIS
	* Will probably require usage of .exec() when running Mongoose functions to trigger promise