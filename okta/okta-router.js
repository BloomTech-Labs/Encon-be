const router = require("express").Router();
const dataBase = require("./okta-model");

// SECTION Middleware
const requireAuthentication = require("./okta-middle.js");

// SECTION GET -- Get All Users
router.get("/users", requireAuthentication, (req, res) => {
  dataBase
    .findAllUsers()
    .then((users) => {
      res.status(200).json({ data: users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// SECTION POST - Add User
router.post("/users",  (req, res) => {
  const oktaInfo = req.body;
  const userInfo = {
    first_name: oktaInfo.first_name,
    last_name: oktaInfo.last_name,
    email: oktaInfo.email,
    state: oktaInfo.middle_name
  };

  

  dataBase
    .findUserByEmail(userInfo.email)
    .then((user) => {
      if (user) {
        res.status(200).json({ data: user });
      } else {
        dataBase
          .addUser(userInfo)
          .then((user) => {
            res.status(201).json({ data: user });
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
            console.log(err.message);
          });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ error: '1 err.message '});
    });
});

// SECTION DELETE - Delete User
router.delete("/users", requireAuthentication, (req, res) => {
  const email = req.body.email;

  dataBase
    .deleteUser(email)
    .then(() => {
      res.status(200).json({ message: "User successfully deleted!" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// SECTION PUT - Update User
router.put("/users", requireAuthentication, (req, res) => {});

module.exports = router;