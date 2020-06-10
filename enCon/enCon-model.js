const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  add,
  getAppliances
};



function getAppliances() {
  return db("appliances");
}


function add(appliance_name) {
  return db("appliances")
    .insert(appliance_name, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("encon as m")
  .join('users as u', 'u.id', 'm.user_id')
  .select('m.id', 'm.state', 'm.state_id','m.user_id','u.username')
  .where("user_id", id );

}


function add(enconData,user_id) {
   // console.log(Object.values(user_id));
    enconData["user_id"] = parseInt(Object.values(user_id));
  //  console.log(enconData);
    return db("encon")
      .insert(enconData);
  }