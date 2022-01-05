const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    Ticket.find({}, function(err, ticketDoc){
        res.render('tickets/new', {
            tickets: ticketDoc,
            flightId: req.params.id
        })

    })

}

function create(req, res){
    // console.log(req.body, '<= req.body');
    // console.log(req.params.id, '<= flightId');
    Ticket.create(req.body, function(err, ticketDoc){
        ticketDoc.flight.push(req.params.id);
        ticketDoc.save(function(err){
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}