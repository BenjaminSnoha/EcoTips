/*
*	Author: Benjamin Snoha
*	Desc: This program is based off of the fact-skill sample provided by amazon. 
*/

'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.2cd18c02-a624-4961-a762-a862ce4f0ef7';

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
                "Try using cloth napkins instead of disposable ones.",
                "Try using fewer disposable napkins and silverware.",
                "Try cooking in tonight.",
				"Don't bite off more than you can chew, conserve.",
				"Try growing your own food.",
				"Growing your own food is cheap and clean.",
				"Try to avoid using disposable bowls, plates, and silverware.",
				"Try to avoid cooking portions too big, forty percent of food in America gets thrown away.",
				"Try using a reusable water bottle.",
				"Try to get any leaks around your house repaired.",
				"If you have a pool, cover it while it's not in use.",
				"Try taking shorter showers.",
				"If it's yellow, let it mellow. If it's brown, flush it down!",
				"Try doing more laundry per load.",
				"Replace your light bulbs with modern environmentally friendly ones.",
				"If you don't think you use enough hot water, try turning down your water heater.",
				"Make sure your home is properly insulated.",
				"Try carpooling to your next destination.",
				"If possible, collect energy via solar panels.",
				"Unplug devices you are not using.",
				"Check with your energy company to compare your usage to your neighbors usage.",
				"Research the energy efficiency of appliances before purchasing them.",
				"Turn off the lights when they are not in use.",
				"Reduce, Reuse, Recycle.",
				"Borrow if possible, don't buy.",
				"Lots of things can be used more than once, think about it before you throw it away!",
				"Try switching to paperless reports on bills.",
				"Try biking or walking to your next destination.",
				"Remember to check your smoke detectors!",
				"Turn down the thermostat when it is not in use during the winter.",
				"Turn up the thermostat when it is not in use during the summer.",
				"Try switching to more water efficient appliances.",
				"Make sure to dispose of your batteries properly.",
				"Look into purchasing a more fuel efficient, or electric vehicle.",
				"Try working out at home, save the trip to the gym.",
				"Try to reuse or give away old clothing.",
				"Use non-toxic cleaning products on your body.",
				"Try planting a tree in your area.",
				"Try purchasing a plant for your home.",
				"Try using public transport.",
				"If you smoke, try to smoke less, or quit smoking if possible.",
				"Avoid pesticides and herbicides.",
				"Your pets can live a sustainable life too!",
				"Try washing dishes by hand if possible.",
				"Try volunteering at a local event or charity.",
				"Try lowering the amount you spend on utilities every month.",
				"Check your local news for environmental awareness events in your area.",
				"Try drying your laundry on a clothes rack.",
				"Get involved with your local community and learn about eco friendly events.",
				"Be mindful of the CO levels and air quality of your area.",
				"Be mindful of the water quality in your area."
            ],
            "SKILL_NAME" : "Eco Tips",
            "GET_FACT_MESSAGE" : "Here's a tip: ",
            "HELP_MESSAGE" : "You can say tell me an eco tip, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random fact from the facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};