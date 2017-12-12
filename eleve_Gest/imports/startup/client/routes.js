import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/login/login.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    if (Meteor.userId()){
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

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
