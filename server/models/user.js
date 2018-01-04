const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirmation: {
        type: String,
        required: true,
    },
    teams: [
        {
            name: {
                type: String,
                unique: true,
                required: true,
                trim: true,
                ref: 'Team'
            },
            city: {
                type: String,
                required: true,
                ref: 'Team'
            },
            owner: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Team'
            }
        }
    ]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;