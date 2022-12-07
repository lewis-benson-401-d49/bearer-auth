'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send('Not Authorized!');
  } else {

    let authString = authorization.split(' ').pop();
    let decodedAuthString = base64.decode(authString);
    let [username, password] = decodedAuthString.split(':');
    let user = await users.findOne({ where: { username } });
    if (user) {
      let validUser = await bcrypt.compare(password, user.password);
      if (validUser) {
        req.user = user;
        next();

      } else {
        next('Not Authorized!');
      }
    }
  }
};

