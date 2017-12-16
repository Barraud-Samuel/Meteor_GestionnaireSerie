import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/admin/admin.js';

// Set up all routes in the app
FlowRouter.route('/', {
    name: 'App.home',
    action() {
        if (Meteor.userId()){
            adminOruserRoute();
        }else{
            FlowRouter.go("/Login");
            console.log('log');
        }
    },
});

//Admin condition function
function adminOruserRoute() {
    Meteor.call('admin_route', function (error, result) {
        if(error){
            console.log(error);
        } else {
            console.log(result);
            if (result === true){
                console.log('admin');
                BlazeLayout.render('App_body',{main: 'App_admin'});
            }else{
                console.log('user');
                BlazeLayout.render('App_body', { main: 'App_home' });
            }
        }
    });
}
//login route
FlowRouter.route('/Login', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_login' });
    },
});

FlowRouter.route('/admin',{
    action(){
        BlazeLayout.render('App_body', {main: 'App_admin'});
    }
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
