var path = require("path");
var friends = require ("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function (req, res){
        var userInput = req.body;
        console.log("User input = " + JSON.stringify(userInput));
        var userResponses = userInput.answers;
        console.log("User responses = " + userResponses)

        var matchName = "";
        var matchImage = "";
        var userDifference = 100;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            
            for (var x = 0; x < userResponses.length; x++) {
                diff += Math.abs(firends[i].answers[x] - userResponses[x]);
            }
            console.log("Difference = " + diff);

            if (diff < userDifference) {
            
                userDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(userInput);

        res.json({status: "OK", matchName: matchName, matchImage: matchImage})
    });
};