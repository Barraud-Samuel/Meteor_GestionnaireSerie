/**
 * Created by samuel on 13/12/17.
 */
import { Eleves } from '/imports/api/eleves/eleves.js';
import { Meteor } from 'meteor/meteor';
import './profile.html'

Template.profile.onCreated(function () {
    Meteor.subscribe('eleves.all');
});

Template.profile.helpers({
    infosAccount() {
        return Eleves.find({});
    },
});