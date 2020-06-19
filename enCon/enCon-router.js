const EnCon = require('./enCon-model.js');
const router = require('express').Router();


router.get('/users', (req, res) => {
  const id = req.decodedToken.userId;
  console.log("id", id);
  EnCon.findUserById(id)
  .then(user => {
    if(user){
      res.status(200).json({data: user})
    } else {
      res.status(404).json({message: 'user could not be found'})
    }
    
    
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
  });
});


router.get('/appliances', (req, res) => {
  const id = req.decodedToken.userId;
  console.log("id", id);
  EnCon.findById(id)
  .then(appliances => {
    res.json(appliances);
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
  });
});


router.post('/appliances', (req, res) => {
  const device = req.body;
 
  const userData = device;
  EnCon.add(userData)
  .then(appliance => {
    res.status(201).json(appliance);
  })
  .catch (err => {
    res.status(500).json({ message: err.message });
  });
});






router.post('/:id', (req, res) => {
  const enconData = req.body;
  const  userid  = req.params; 
 // console.log(userid);
  EnCon.add(enconData, userid)
  .then(encon => {
    res.status(201).json(encon);
  })
  .catch (err => {
    res.status(500).json({ message: err.message });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  EnCon.findById(id)
  .then(encon => {
    if (encon) {
      res.json(encon);
    } else {
      res.status(404).json({ message: 'Could not find data for user.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
  });
});


module.exports = router;
