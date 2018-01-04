const express = require('express');
const authenticate = require('../middleware/authenticate');
const Team = require('../models/team');
const User = require('../models/user');

let router = express.Router();

// Get teams
router.get('/user-teams', (req, res) => {
    console.log(req.headers.id);

    User.find({ _id: req.headers.id }).then( result => {
        console.log(result[0].teams);
        res.json(result[0].teams);
    });

});

// Create team
router.post('/create', (req, res) => {
    const { name, city, owner } = req.body;

    let team = new Team({
        name: name,
        city: city,
        owner: owner
    });

    team.save((error) => {
        console.log(error);
        if (!error) {
            Team.find()
                .populate('owner')
                .exec((error, teams) => {
                    console.log(JSON.stringify(teams, null, "\t"));
                    User.findByIdAndUpdate(owner, { $push: { teams: team }}, { new: true }, (err, user) => {
                        if (err) return handleError(err);
                        res.json(user);
                    });
                })
        } else {
            res.send(500, {error: "Team with this name exist"})
        }
    });
});

// Update team
router.put('/update', (req, res, next) => {
    const { id, userId , name, city } = req.body;

    Team.findByIdAndUpdate({_id: id}, req.body,{"multi": true}).then((team) => {
        User.update({'teams._id': id}, {$set: {'teams.$.name': name, 'teams.$.city': city}},
            (err, model) => {
                console.log(model);
            }
        );
        res.send(team);
    }).catch(next);
});

// Remove team
router.delete('/remove', (req, res, next) => {
    Team.findByIdAndRemove(req.query.id).then((team) => {
        User.update({_id: req.query.userId}, {$pull: { "teams": {'_id': req.query.id}}},
            (err, model) => {
                console.log(model);
            }
        );
        res.send(team);
    }).catch(next);
});

function handleError(err){
    console.log(err)
}


module.exports = router;