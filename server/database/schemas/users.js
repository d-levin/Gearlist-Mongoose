var Schema = {
  users: {
    id: { type: 'increments', nullable: false, primary: true },
    email: { type: 'string', maxlength: 254, nullable: false, unique: true },
    first_name: { type: 'string', maxlength: 75, nullable: false },
    last_name: { type: 'string', maxlength: 75, nullable: false },
    password: { type: 'string', maxlength: 60, nullable: false }
  }
}

module.exports = Schema;
