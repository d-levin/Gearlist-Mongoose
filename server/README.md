#### Dependency Summary
| Package | Explanation |
| ------- | ----------- |
| bcryptjs | Encryption for user authentication; this library works on machines running Windows |
| body-parser | Middleware for decoding JSON |
| change-case | String manipulation |
| cors | Allow cross origin requests | 
| express | Web framework that makes it easy to write secure, modular, and fast applications |
| helmet | Secures HTTP headers |
| lodash | Simplifies iterating over arrays, objects, and strings |
| mongoose | Object-oriented database API |
| passport, passport-* | User authentication |
| path | Handles and transforms file paths |
| require-dir | Automatically require all files in a directory |
| serve-favicon | Serves a favicon |

#### Routes
| HTTP VERB | PATH | ACTION | RETURN VALUE |
| --------- | ---- | ------ | ------------ |
| GET | / | Retrieve root | String |
| GET | /* | Unregistered routes | Custom 404 page |
| GET | /api/users | Retrieve all users | JSON object |
| POST | /api/users | Create user | JSON object |
| GET | /api/users/:userId | Retrieve user with specified ID | JSON object |
| PUT | /api/users/:userId | Update user with specified ID | JSON object |
| DELETE | /api/users/:userId | Remove user with specified ID | JSON object |
| GET | /api/users/username/:userEmail | Retrieve user with specified email | JSON object |