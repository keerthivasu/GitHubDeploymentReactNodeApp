var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 8080);
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(express.static('./reactapp/build'));

app.get("*", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "reactapp", "build", "index.html"));
  });

module.exports = app;

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});