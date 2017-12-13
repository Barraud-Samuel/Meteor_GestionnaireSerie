// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Eleves } from './eleves.js';

Meteor.methods({
  'eleves.upsert'(username, email,githubLink) {
    check(username, String);
    check(email, String);
    check(githubLink, String);

    return Eleves.insert({
      username,
      email,
      githubLink,
      owner: Meteor.userId(),
      createdAt: new Date(),
    });
  },
});
