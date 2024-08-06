const db = require("../models");

// Defining methods for the attendeesController
module.exports = {
    // writes the new attendee to the database
    // attendees are added through Postman
    create: function (req, res) {
        console.log('Create Attendee Request Body:', req.body);  // Debugging line
        db.Attendee.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err);
                res.status(422).json(err);
            });
    },
    // finds all the attendees in the database
    findAll: function (req, res) {
        db.Attendee.findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err);
                res.status(422).json(err);
            });
    },
    // removes attendee from the database
    remove: function (req, res) {
        db.Attendee.findOne({ where: { id: req.params.id } })
            .then(dbModel => {
                if (dbModel) {
                    return dbModel.destroy();
                } else {
                    res.status(404).json({ error: "Attendee not found" });
                    throw new Error("Attendee not found");  // To prevent the next .then() from executing
                }
            })
            .then(() => res.json({ success: true }))
            .catch(err => {
                console.error(err);
                res.status(422).json(err);
            });
    },
    // registers an attendee
    register: function (req, res) {
        db.Attendee.findOne({ where: { uuid: req.params.uuid } })
            .then(dbModel => {
                if (dbModel) {
                    return dbModel.update({ registered: true });
                } else {
                    res.status(404).json({ error: "Attendee not found" });
                    throw new Error("Attendee not found");  // To prevent the next .then() from executing
                }
            })
            .then(() => res.json({ success: true }))
            .catch(err => {
                console.error(err);
                res.status(422).json(err);
            });
    },
    

        create: function (req, res) {
            console.log('Create Attendee Request Body:', req.body);  // Debugging line
            db.PassType.findOne({ where: { /* add condition to find appropriate pass type */ } })
                .then(passType => {
                    if (!passType) {
                        throw new Error("Pass type not found");  
                    }
                    // Associate the found pass type with the attendee
                    req.body.PassTypeId = passType.id;
                    return db.Attendee.create(req.body);
                })
                .then(dbModel => res.json(dbModel))
                .catch(err => {
                    console.error(err);
                    res.status(422).json(err);
                });
        },
};
