'use strict';

const letterService = require('../services/letterService');

function parseLetter(req) {
  return {
      firstName: req.body.personalDetails.firstName,
      lastName: req.body.personalDetails.lastName,
      email: req.body.personalDetails.email,
      phone: req.body.personalDetails.phone,
      street: req.body.personalDetails.street,
      city: req.body.personalDetails.city,
      state: req.body.personalDetails.state,
      postCode: req.body.personalDetails.postCode,
      publications: req.body.publications
  };
}

function send(req, res) {
  let newLetter = parseLetter(req);

  return letterService.createLetter(newLetter)
    .then(() => {
      return res.sendStatus(201);
    })
    .catch(() => {
      return res.status(400).send("letter creation failed");
    });
}

module.exports = {
  send: send
};
