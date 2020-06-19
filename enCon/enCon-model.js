const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  findUserById,
  add,
  getAppliances,
  add
};


function findUserById(id){
  return db.select('*').from('users')
    .where({id}).first();
}


function getAppliances(id) {
  return db("device").where('user_id');
};


function add(device) {
  return db("device")
    .insert(device, "id")
    .then(([id]) => {
      return findById(id);
    });
};

function findById(id) {
   return db("device as d")
   .join('users as u', 'u.id', 'd.user_id')
   .select('d.user_id','u.name','d.device', 'd.days', "d.hours")
   .where("user_id", id );
};

