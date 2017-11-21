import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Series = new Mongo.Collection('series');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('series', function seriesPublication() {
    return Series.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}


Meteor.methods({
  'series.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Series.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'series.remove'(serieId) {
    check(serieId, String);


     const serie = Series.findOne(serieId);
    if (serie.private && serie.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Series.remove(serieId);
  },
  'series.setChecked'(serieId, setChecked) {
    check(serieId, String);
    check(setChecked, Boolean);

    const serie = Series.findOne(serieId);
    if (serie.private && serie.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
 
    Series.update(serieId, { $set: { checked: setChecked } });
  },
  'series.setPrivate'(serieId, setToPrivate) {
    check(serieId, String);
    check(setToPrivate, Boolean);
 
    const serie = Series.findOne(serieId);
 
    // Make sure only the task owner can make a task private
    if (serie.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Series.update(serieId, { $set: { private: setToPrivate } });
  },
});