import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.info.helpers({
  links() {
    return Links.find({});
  },
});

Template.info.events({
    //class of the form block
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const type = target.type;
    const title = target.title;
    const seen = target.seen;
    const total = target.total;

    Meteor.call('links.insert', type.value, title.value, seen.value, total.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        type.value = '';
        title.value = '';
        seen.value = '';
        total.value = '';
      }
    });
  },
    'click .delete'(){
        Meteor.call('links.remove', this._id,);
        console.log('removed')
        /*Links.remove(this._id);*/
    },
});

Template.registerHelper("timestampToTime", function (timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});