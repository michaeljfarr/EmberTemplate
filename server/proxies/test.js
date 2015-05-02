var proxyPath = '/api/test';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  proxy.on('proxyRes', function (proxyRes, req, res) 
  {
    /*
      console.log('Request Headers:', JSON.stringify(req.headers, true, 2));
      console.log('Result Headers:', JSON.stringify(proxyRes.headers, true, 2));
      proxyRes.on('data' , function(dataBuffer){
        var data = dataBuffer.toString('utf8');
        console.log("This is the data from target server : "+ data);
    });
    */ 

  });

  app.use(proxyPath, function(req, res, next){
    delete req.headers.host;
    //req.url = req.url.replace('/api/v1', '/');
    proxy.web(req, res, { target: 'http://time.jsontest.com/' });
    //console.error("debug", req.url);
  });
};