import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

 
import { Series } from '../api/series.js';
 
import './serie.js'; 
import './body.html';
 
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('series');
});

//DISPLAY THE TASK

Template.body.helpers({
  series() {
  	const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Series.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Otherwise, return all of the tasks
    // Show newest series at the top
    return Series.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
    return Series.find({ checked: { $ne: true } }).count();
  },
});

//LISTEN THE SUBMIT EVENT ON THE FORM

Template.body.events({
  'submit .new-series'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;	
    const text = target.text.value;
 
    // Insert a series into the collection
    Meteor.call('series.insert', text);
    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});