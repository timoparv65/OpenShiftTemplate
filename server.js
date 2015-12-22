var express = require('express');

var app = express();

// You need to define these two variables with these
// two environment variables to get your app work in openshift
// => https://developers.openshift.com/en/node-js-environment-variables.html
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'; // 0.0.0.0 = in any adress, voi kuunnella missä ip-osoitteessa tahansa porttia 8080

//When this server is connected, return the index.html as response
app.get('/',function(req,res){
    
   res.sendfile('index.html') ;
});

//Listen the given port in given ip address
app.listen(port, ip_address);
