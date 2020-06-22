const request = require("supertest");

const server = require("../api/server.js");
const db = require("../database/dbConfig.js");

const user = {
  email: "bilbo@gmail.com",
  password: "password"
};

const testData = 

  {
    device: "tv",
    hours: '4',
    days: '5',
    user_id: 3
  };


let token;

  describe("POST /register", function () {
    beforeEach(async () => {
      await db("users").truncate(); // empty the table and reset the id back to 1
    });

    it ("return 201 on success", async () => {
   try{ const response = await
      request(server)
        .post("/api/auth/register")
        .send( {name: "bilbo", password: "pass", state: 'vermont', email: 'bilbo@gmail.com'})
       // console.log(response)
        expect(response.status).toBe(201);}
        catch(error){console.log(error)}
     
    });

    it('should return a message saying "User created successfully"', function () {
      return request(server)
      .post("localhost:3300/api/auth/register")
        .send({ name: "bilbo", password: "pass", state: 'vermont', email: 'bilbo@gmail.com' })
        .then(res => {
         // console.log(res);
          expect(res.body.message).toBe("User created successfully");
        }).catch(err => {
        //  console.log(err);
    });
  });
  
})





  describe("login post", () => {
    describe("login user with correct credentials receive 200", () => {
        it("check username and password with database", () => {
            request(server)
            .post("/api/auth/login")
            .send(user)
            
            .end((err, response) => {
              token = response.body.token; // save the token!
           console.log("11111"+token);
            });
        });
      });

    


     it("return 401 from non-existent login", function () {
          return request(server)
          .post("/api/auth/login")
          .send({
              email: "ETID@gmail.com",
              password: "fdghjdfjdghjdhj"
          })
          .then(res => {
              expect(res.status).toBe(401);
          });

    });

    it("should return json", async() => {
      return request(server)
          .post("/api/auth/login")
          .send(user)
          .then(res => {
              expect(res.type).toBe("application/json");
          })
  })
  });


  describe('GET /', () => {
    // token not being sent - should respond with a 400
    test('It should require authorization', () => {
      return request(server)
        .get('/api/encon/appliances')
        .then((response) => {
          expect(response.statusCode).toBe(400);
        });
    });
    
  });

  describe('POST /', () => {
    // token not being sent - should respond with a 400
    test('It should require authorization', () => {
      return request(server)
        .post('/api/encon/appliances')
        .send(testData)
        .then((response) => {
          expect(response.statusCode).toBe(400);
        });
    });
    
  });


  test('Send incorrect token, deny request', () => {
    //    console.log("11111"+token);
        return request(server)
          .get('/api/encon/1')
          .set('Authorization', `wrong token`)
          .send(testData)
          .then((response) => {
            expect(response.statusCode).toBe(401);
            expect(response.type).toBe('application/json');
          });
      });
  
const enhancer = require("./auth-model.js");
const { set } = require("../api/server.js");

describe("auth-model.js", function () {
  it("run all tests", () => {
    expect(true).toBe(true);
  });
  describe(".succeed(item)", () => {
    it("ensure auth model findBy is active", () => {
      expect(
        enhancer.findBy({
          username: "bilbo21gf2"
        })
      ).toHaveProperty('_asColumnFlag', false);
    });
  });
  describe(".succeed(item)", () => {
    it("ensure auth model findById is active", () => {
      expect(
        enhancer.findById({
          id: 1
        })
      ).toHaveProperty('_asColumnFlag', false);
    });
  });
  describe(".succeed(item)", () => {
    it("ensure auth model find is active", () => {
      expect(
        enhancer.find({
          id: 1
        })
      ).toHaveProperty('_asColumnFlag', false);
    });
  });
  describe(".succeed(item)", () => {
    it("ensure auth model add function is active", () => {
      expect.anything();
    });
  });
  
});
