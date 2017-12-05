// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(type, title, seen, total) {
    check(type, String);
    check(title, String);
    check(seen, String);
    check(total, String);

    return Links.insert({
      type,
      title,
      seen,
      total,
      user: Meteor.userId(),
      timestamp: Date.now(),
      createdAt: new Date(),
    });
  },
    'links.remove'(linkId){
      Links.remove(linkId);
    },
});
