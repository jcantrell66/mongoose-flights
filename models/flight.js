const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date
        // default: function() {
        //     return new Date().getFullYear;
        // }
    }
})

//now we need to compile the schema in the Model object and export it
//this line  creates the model, and creates a movies collection in MongoDB, lowercase and plural of our model
module.exports = mongoose.model('Flight', flightSchema);