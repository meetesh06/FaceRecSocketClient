const express = require ('express');
const routes  = require('./app/routes')

const app = express();
const PORT = process.env.PORT || 7770; 

app.use(express.static('public'));
app.use('/', routes);


app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function () {
	console.log("server running on https://localhost:"+PORT+"/");
});