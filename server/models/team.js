const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;