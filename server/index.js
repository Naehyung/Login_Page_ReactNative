const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2173",
  database: "login_system",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlSELECT = "SELECT * FROM users where username = ?";
  db.query(sqlSELECT, username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
   
    if(result.length > 0) {
      res.send("Username already exists");
    } else {
      res.send("");
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          console.log(err);
        }
        const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?);";
        db.query(sqlInsert, [username, hash], (err, result) => {
          console.log(err);
        });
      });
    }
  })
});

const verifyJWT = (req, res, next) => {
  
  const token = req.headers["authorization"];

  if (!token) {
    res.send("We need a token");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to authenticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.json({ auth: true, message: "You are authenticated." });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlSELECT = "SELECT * FROM users where username = ?";
  db.query(sqlSELECT, username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });

          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({
            auth: false,
            message: "Wrong username/password combination",
          });
        }
      });
    } else {
      res.json({ auth: false, message: "No user exists" });
    }
  });
});

app.listen(3001, "192.168.0.5", () => {
  console.log("running on port 3001");
});
