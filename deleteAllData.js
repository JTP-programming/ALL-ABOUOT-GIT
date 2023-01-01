const db = require("./db");

async function deleteRow() {
  const [id] = process.argv.slice(2);
  db.run(`DELETE FROM user`, [id], function (error) {
    if (error) {
      return console.error(error.message);
    }
    console.log(`EVERYTHIN IS GONE`);
  });
}

deleteRow();