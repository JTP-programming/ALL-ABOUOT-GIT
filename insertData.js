const db = require("./db");

function insertRow() {
  const [name, color, weight] = process.argv.slice(2);
  db.run(
    `INSERT INTO user (firstname, lastname, username, email, password) VALUES (?,?,?,?,?)`,
    ["Rayan", "Muhammed", "RM231", "rayan.muhammed@outlook.com", "twenty_fifteen"],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
    }
  );
}
insertRow();