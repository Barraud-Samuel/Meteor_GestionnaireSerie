// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';

//display the data
Meteor.publish('links.all', function () {
  return Links.find({});
});
