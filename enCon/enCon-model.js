const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  add,
  getAppliances
};



function getAppliances() {
  return db("device");
}


function add(device) {
  return db("device")
    .insert(device, "id")
    .then(([id]) => {
      return findById(id);
    });
}

 function findById(id) {
   return db("device as d")
  .join('users as u', 'u.id', 'd.user_id')
  .select('d.id','d.user_id','u.name')
   .where("user_id", id );

 }


// function add(enconData,user_id) {
//    // console.log(Object.values(user_id));
//     enconData["user_id"] = parseInt(Object.values(user_id));
//   //  console.log(enconData);
//     return db("encon")
//       .insert(enconData);
//   }