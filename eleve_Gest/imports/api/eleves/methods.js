// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Eleves } from './eleves.js';

Meteor.methods({
  'eleves.upsert'(username, email,githubLink) {
    check(username, String);
    check(email, String);
    check(githubLink, String);

    return Eleves.upsert(
        { owner: Meteor.userId()},
        { $set:{
            username,
            email,
            githubLink,
            createdAt: new Date(),
        }

    });
  },
});
