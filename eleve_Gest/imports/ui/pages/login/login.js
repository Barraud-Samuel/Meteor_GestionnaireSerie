/**
 * Created by samuel on 12/12/17.
 */
import { Eleves } from '/imports/api/eleves/eleves.js';
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

/*
je comprend pas pourquoi le packet useraccounts:flow-routing redirige automatiquement
ver la home sans avoir parametré aucun chemin, je ne sais pas si c'est le comportement de base*/
