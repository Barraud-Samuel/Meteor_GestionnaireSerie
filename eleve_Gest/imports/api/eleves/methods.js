// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Eleves } from './eleves.js';
import { Roles } from 'meteor/alanning:roles';

//methods for updating student info
Meteor.methods({
  'eleves.upsert'(username, email,githubLink) {
    check(username, String);
    check(email, String);
    check(githubLink, String);

    return Eleves.upsert(
        { owner: Meteor.userId()},
        { $set:{
            username,
            email,
            githubLink,
            createdAt: new Date(),
        }

    });
  },
});



//methods for configuration roles
Meteor.methods({
    'define_roles': function () {
        const userEmail = Meteor.user().emails[0].address;
        const userId = Meteor.userId();
        console.log(userId);
        console.log(userEmail);
        if (userEmail === 'admin@gmail.com'){
            Roles.addUsersToRoles(userId, ['admin'] );
            console.log('creation dun admin');
        }else {
            Roles.addUsersToRoles(userId, ['user'] );
            console.log("creation d'un utilisateur lambda");
        }
    }
});

Meteor.methods({
    'get_emails':function(){
        return Meteor.user().emails[0].address;
    }
});

//methods for the admin route
/*
Meteor.methods({
    'admin_route': function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin' )){
            console.log('true')
        }else{
            console.log('false')
        }
        return Roles.userIsInRole(Meteor.userId(), 'admin' );
    }
});*/
