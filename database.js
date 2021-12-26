var sqlite3 = require('sqlite3').verbose()
//var db = new sqlite3.Database(':memory:')

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
      }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com","admin123456"])
                db.run(insert, ["user","user@example.com","user123456"])
            }
        }); 
    }
})

db.close()
module.exports = db
