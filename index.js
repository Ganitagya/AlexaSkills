"use strict"

var Alexa = require("alexa-sdk");
var SKILL_NAME = "Aka X-Mas";
var APP_ID = ""

//Setup
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
}


var handlers = {
    'LaunchRequest': function() {
        this.emit('PlayChristmasCarol');
    },

    'PlayChristmasCarolIntent' : function() {
        this.emit('PlayChristmasCarol');
    },

    'PlayChristmasCarol' : function() {
        //Put your code here

        //Output
        var speechOutput  = "Thanos is celebrating Christmas 20 17 with Aakash Mahapatra !!!";

        this.emit(":tellWithCard", speechOutput, SKILL_NAME);

    },

    'AMAZON.HelpIntent': function() {
        var speechOutput = "You can say Christmas is here , or, Let's celebrate Christmas, or, Let's enjoy Christmas ... What can I help you with";
        var reprompt = "What can I help you with ?"
        this.emit(":ask", speechOutput, reprompt);
    },

    'AMAZON.StopIntent' : function() {
        this.emit(":tell", "It was so fun with you Akash, You were Amazing, Goodbye!");
    }
}
