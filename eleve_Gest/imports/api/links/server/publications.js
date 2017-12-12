// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Eleves } from '../links.js';

Meteor.publish('eleves.all', function () {
  return Eleves.find();
});
