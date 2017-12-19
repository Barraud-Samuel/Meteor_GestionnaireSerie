// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Eleves } from '../eleves.js';

//publication des informations concernant les utilisateurs (la collections des Users ainsi que les eleves sont relié par l'id du créateur/user)
Meteor.publish('eleves.all', function () {
  return Eleves.find();
});

//Publication des utilisateurs

Meteor.publish('userData', function () {
   return Meteor.users.find({});
});