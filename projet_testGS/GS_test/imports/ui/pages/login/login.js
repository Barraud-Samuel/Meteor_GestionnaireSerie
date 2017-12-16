/**
 * Created by samuel on 15/12/17.
 */
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles';
import './login.html'

Template.App_login.events({
    'click .logout'(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go("/Login");
    },
});

// Template.App_login.events({
//     'submit .submit'(event){
//         event.preventDefault();
//         const target = event.target;
//         const email = target.email.value;
//         const password = target.password.value;
//         Meteor.loginWithPassword(email, password, function(error){
//             if(error){
//                 alert(error.reason);
//             } else {
//                 FlowRouter.go("/");
//             }
//         });
//     },
// });

//call the user role  sould be at the trigger submit button and also at the home page

