import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

//404 error
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

//page de connection
/*FlowRouter.route('/login', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'App_home' });
    },
});*/
//page d'inscription
/*
FlowRouter.route('/login', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'App_home' });
    },
});*/


//routes administrateurs
/*
var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin',
    triggersEnter: [function(context, redirect) {
        console.log('running group triggers');
    }]
});

// handling /admin route
adminRoutes.route('/', {
    action: function() {
        BlazeLayout.render('componentLayout', {content: 'admin'});
    },
    triggersEnter: [function(context, redirect) {
        console.log('running /admin trigger');
    }]
});*/
