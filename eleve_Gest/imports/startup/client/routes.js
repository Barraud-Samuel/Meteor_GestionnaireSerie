import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/notes/notes.js';
import '../../ui/pages/absences/absences.js';
import '../../ui/pages/admin/admin.js';
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    if (Meteor.userId()){
        //adminOruserRouteforHomepage();
        BlazeLayout.render('App_body', { main: 'App_home' });
    }else{
        FlowRouter.go("/Login");
        console.log('log');
    }
  },
});

FlowRouter.route('/Login', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_login' });
    },
});

FlowRouter.route('/Profil', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_profile' });
    },
});

FlowRouter.route('/Notes', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notes' });
    },
});

FlowRouter.route('/Absences', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_absences' });
    },
});

// admin route
FlowRouter.route('/Admin', {
    action() {
        //adminOruserRouteforAdmin();
        BlazeLayout.render('App_body', { main: 'App_admin' });
    },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

//HELPERS DE REDIRECTION
Template.registerHelper( 'isAdmin', () => {
    return Roles.userIsInRole(Meteor.userId(), 'admin' );
});
Template.registerHelper( 'isUser', () => {
    return Roles.userIsInRole(Meteor.userId(), 'user' );
});

