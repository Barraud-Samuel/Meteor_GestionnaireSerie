import { Template } from 'meteor/templating';
 
import { Series } from '../api/series.js';
 
import './serie.js'; 
import './body.html';
 
Template.body.helpers({
  series() {
    // Show newest series at the top
    return Series.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-series'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;	
    const text = target.text.value;
 
    // Insert a series into the collection
    Series.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
});