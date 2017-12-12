/**
 * Created by samuel on 12/12/17.
 */
import { Eleves } from '/imports/api/links/eleves.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor';
import './login.html';


//template log out (remplacer le nom du template)
Template.App_login.events({
    'click .logout'(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go("/Login");
    },
});

Template.App_login.events({
    'submit .login'(event){
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
            } else {
                FlowRouter.go("/");
            }
        });
    },
});
