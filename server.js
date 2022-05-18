const { response } = require('express');
const express = require('express');
const marsMissions = require('./models/mars.js');
const app = express();
const port = 3000;

console.log(marsMissions)

app.get("/mars",(req,res) => {
    res.render("mars_index.ejs", {marsMissions})
});


app.get("/mars/:id", (req, res) => {
    const { name, launchDate, operator, missionType,  img } = marsMissions[req.params.id];
    res.render("mars_show.ejs", {name, launchDate, operator, missionType, img})
});





app.listen(port, () =>{
    console.log(`Listening on port`, port)
});