var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(apiReq, apiRes) {
    return apiRes.json(friends);
  });

  app.post("/api/friends", function(apiReq, apiRes) {
    //code for manipulating apiReq
    var userData = apiReq.body;
    console.log(userData);

    for (i = 0; i < userData.scores.length; i++) {
      userData.scores[i] = parseInt(userData.scores[i]);
    }
    console.log(userData);

    //turn json into js object vis JSON.parse()
    //convert the values in the scores array into integers
    //find the best match
    friends.push(userData);
    console.log(friends);
    //dummy value for now
    var bestMatch = friends[9];
    //console.log(bestMatch);

    apiRes.json(bestMatch);
  });
};

//Connection to friends.js tested via: console.log(friends)
