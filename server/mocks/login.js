module.exports = function(app) {
  var express = require('express');
  var loginRouter = express.Router();

  loginRouter.post('/', function(req, res) {
    res.send({
      'response':
        {yey: "!"}
      });
  });

  app.use('/api/login', loginRouter);
};
