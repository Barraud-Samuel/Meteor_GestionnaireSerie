/**
 * Created by samuel on 13/12/17.
 */
import './notes.html';
import { Template } from 'meteor/templating';

//a inserer en base de donnée plus tard via pa page admin

Template.notes.helpers({
    notes: [
        { matiere:'Developpement Front', note: '12' },
        { matiere: 'Clean Design', note:'15' },
        { matiere: 'Gestion de projet', note:'13' },
        { matiere: 'Gestion de projet', note:'17' },
    ],
});

/*
 Template.hello.onCreated(function helloOnCreated() {
 // counter starts at 0
 this.counter = new ReactiveVar(0);
 });

 Template.hello.helpers({
 counter() {
 return Template.instance().counter.get();
 },
 });

 Template.hello.events({
 'click button'(event, instance) {
 // increment the counter when button is clicked
 instance.counter.set(instance.counter.get() + 1);
 },
 });
 */

