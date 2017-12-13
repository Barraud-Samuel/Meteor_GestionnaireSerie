/**
 * Created by samuel on 13/12/17.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';
import './nav_bar.html'

Template.nav_bar.events({
    'click .logout'(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go("/Login");
    },
    'click .profile'(events){
        events.preventDefault();
        FlowRouter.go("/Profil");
    },
    'click .home'(events){
        events.preventDefault();
        FlowRouter.go("/");
    },
    'click .notes'(events){
        events.preventDefault();
        FlowRouter.go("/Notes");
    },
    'click .absences'(events){
        events.preventDefault();
        FlowRouter.go("/Absences");
    }
});