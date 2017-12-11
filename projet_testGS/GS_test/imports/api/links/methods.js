// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(type, title, seen, total) {
    check(type, String);
    check(title, String);
    check(seen, Number);
    check(total, String);

    return Links.insert({
      type,
      title,
      seen,
      total,
      user: Meteor.userId(),
      timestamp: Date.now(),
      createdAt: new Date()
    });
  },
    'links.remove'(linkId){
      Links.remove(linkId);
    },
    'links.update'(seen_id){
      const seen = Links.findOne(seen_id).seen;
      console.log(seen);
    Links.update(seen_id, { $set: {seen : seen +1 } });
    }
});
