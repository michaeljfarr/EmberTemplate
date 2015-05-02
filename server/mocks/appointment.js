module.exports = function(app) {
  var express = require('express');
  var appointmentRouter = express.Router();

  appointmentRouter.get('/', function(req, res) {
    res.send({
      'appointment': 
      {
    	  "dateRead": 1430428922573,
    	  "appointments": [
    	    {
    	      "date": 2860857844678,
    	      "formattedDate": "28/08/2060",
    	      "reference": "type1-topic1",
    	      "type": {
    	        "code": "Type1",
    	        "description": "Type 1 appointment"
    	      },
    	      "topic": {
    	        "code": "Topic1",
    	        "description": "Topic 1 appointment"
    	      },
    	      "personMeeting": "John Smith",
    	      "location": {
    	        "address": {
    	          "addressLines": [
    	            "Ground Floor",
    	            "Freemason House",
    	            "Te Aro",
    	            "Wellington"
    	          ]
    	        },
    	        "directions": "On willis street",
    	        "name": "Wellington/Wellington Super"
    	      }
    	    },
    	    {
    	      "date": 2860875844678,
    	      "formattedDate": "28/08/2060",
    	      "reference": "type2-topic1",
    	      "type": {
    	        "code": "Type2",
    	        "description": "Type 2 appointment"
    	      },
    	      "topic": {
    	        "code": "Topic1",
    	        "description": "Topic 1 appointment"
    	      },
    	      "personMeeting": "Julie Smith",
    	      "location": {
    	        "address": {
    	          "addressLines": [
    	            "Shop 6",
    	            "The mall",
    	            "Wainuiomata",
    	            "Wainuiomata"
    	          ]
    	        },
    	        "directions": "in the mall on left",
    	        "name": "Wainuiomata community link"
    	      }
    	    }
    	  ]
    	}
    });
  });

  app.use('/api/appointment', appointmentRouter);
};
