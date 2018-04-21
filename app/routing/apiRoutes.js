var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(apiReq, apiRes) {
    return apiRes.json(friends);
  });

  //app.post("/api/friends", function(apiReq, apiRes) {

  //});
};

//Connection to friends.js tested via: console.log(friends)
