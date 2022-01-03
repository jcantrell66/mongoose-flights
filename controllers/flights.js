const Flight = require('../models/flight');



module.exports = {
    new: newFlight,
    index,
    create
}


function newFlight(req, res) {
    res.render('flights/new.ejs');
}

function index(req, res) {
    //this returns an array of objects
    Flight.find({}, function (err, allFlights) {
        res.render('flights/index.ejs', {
            flights: allFlights,
            //the key is the name of the variable in the ejs document
            //the value of allMovies passes the array into the movies variables
            //and then iterate over it in the ejs doc

        });
    })
}

function create(req, res) {
    //Model is talking to the database asking to create this document
    Flight.create(req.body, function (err, flightDoc) {

        // console.log(typeof(req.body.departs));
        //Mongo is converting the date selected in the html, which is a string, into an object for Mongo
        //split string into an array on its dashes
        console.log(req.body.departs, "original");
        req.body.departs = req.body.departs.split('-');
        //convert the year (index 0) into a number
        console.log(req.body.departs, "after split");
        req.body.departs[0] = parseInt(req.body.departs[0]);
        //add 1, increasing year by 1
        console.log(req.body.departs, "after turning into num");
        req.body.departs[0]++;
        //rejoin the array into a string
        console.log(req.body.departs, "after increasing year");
        req.body.departs = req.body.departs.join('-');
        console.log(req.body.departs, "after join");


        //respond to the client (browser)
        res.redirect('/flights');
    })
}