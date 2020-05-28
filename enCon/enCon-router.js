const axios = require('axios');

const EnCon = require('./encon-model.js');

const router = require('express').Router();


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
