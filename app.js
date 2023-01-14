const db = require("./db");
var express = require("express");
var app = express();
var cors = require('cors')
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

app.post("/api/login", (req, res, next) => {
    var sql = `select * from user where username = "${req.body.username}" and password = "${req.body.password}"`
    console.log(req.body, sql)
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        console.log("From Database",row)
        if(row === undefined){
          res.status(400).json({"error":"Incorrect username or password"});
          return;
        }
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"Login Successful",
            "data":row
        })
      });
});

app.post("/api/signup", (req, res, next) => {
    var sql = `INSERT INTO user (firstname, lastname, username, email, password) VALUES ("${req.body.firstname}","${req.body.lastname}","${req.body.username}","${req.body.email}","${req.body.password}")`
    var params = [req.params.id]
    db.run(sql, params, (err, row) => {
        if (err) { 
          res.status(400).json({"error":err.message});
          return;
        }
        console.log("Hello!")
        res.json({
            "message":"Sign-up Successful",
            "data":row
        })
      });
});