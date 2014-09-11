var express = require('express');
var app     = express();

app.use(require('connect-livereload')({
    port: 35729
}));

app.use(express.static(__dirname + '/.build'));

app.get('*',function(req,res){
  res.sendfile('.build/index.html');
});

app.listen(9000, function() {
    console.log("Listening on 9000");
});