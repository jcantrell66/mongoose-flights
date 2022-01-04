const Flight = require('../models/flight');
 
module.exports = {
  create
};

function create(req, res){

    console.log(req.params.id, 'req.params.id');
    console.log(req.body, 'contents of the form');



    Flight.findById(req.params.id, function(err, flightDoc){

        flightDoc.destinations.push(req.body);
        console.log(req.body);
        console.log(flightDoc, 'all desintations');
        flightDoc.save(function(err){
            res.redirect(`/flights/${flightDoc._id}`);
        })
    })

}