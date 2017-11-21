import { Template } from 'meteor/templating';
 
import { Series } from '../api/series.js';
 
import './serie.html';
 
Template.serie.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Series.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Series.remove(this._id);
  },
});