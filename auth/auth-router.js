const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken"); 

const Users = require("./auth-model.js");

const secrets = require("../database/secrets.js");

router.post('/register', (req,res) => {
  let user = req.body;
  const rounds = process.env.HASH_ROUNDS;
  const hash = bcryptjs.hashSync(user.password, rounds);
  user.password = hash;

  Users.add(user).then(saved => {
      res.status(201).json(saved);

  }).catch(error =>{
      res.status(500).json({errormessage: error.message})
  })

});


router.post('/login', (req, res) => {
  let { email , password } = req.body;

    Users.findBy({ email })
        .then(([thisUser]) => {
            if (thisUser && bcryptjs.compareSync(password, thisUser.password)) {
                const token = generateToken(thisUser);
                
                res.status(200).json({ message: "Welcome!", token, Data: thisUser  });
            } else {
                res.status(401).json({ message: "Authentication problem." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: err.message });
        })
});

function generateToken(user) {
  // the data
  const payload = {
    userId: user.id,
    username: user.name,
  };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
