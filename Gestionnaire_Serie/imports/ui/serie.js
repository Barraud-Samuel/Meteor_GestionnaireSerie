import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import './serie.html';

Template.serie.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
}); 

Template.serie.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('series.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('series.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('series.setPrivate', this._id, !this.private);
  },
});