// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  'links.insert'(type, title, seen, total) {
    check(type, String);
    check(title, String);
    check(seen, Number);
    check(total, String);

    return Links.insert({
      type,
      title,
      seen,
      total,
      user: Meteor.userId(),
      timestamp: Date.now(),
      createdAt: new Date()
    });
  },
    'links.remove'(linkId){
      Links.remove(linkId);
    },
    'links.updatePlus'(seen_id){
      const seen = Links.findOne(seen_id).seen;
      console.log(seen);
    Links.update(seen_id, { $set: {seen : seen +1 } });
    },
    'links.updateMinus'(seen_id){
        const seen = Links.findOne(seen_id).seen;
        console.log(seen);
        Links.update(seen_id, { $set: {seen : seen -1 } });
    }
});

//configuration of the roles for the app with alaning roles

Meteor.methods({
    'define_roles': function () {
      const userEmail = Meteor.user().emails[0].address;
      const userId = Meteor.userId();
      console.log(userId);
      console.log(userEmail);
      if (userEmail === 'sam@gmail.com'){
          Roles.addUsersToRoles(userId, ['admin'] );
          console.log('creation dun admin');
      }else {
          Roles.addUsersToRoles(userId, ['user'] );
          console.log("creation d'un utilisateur lambda");
      }
    }
});

Meteor.methods({
    'admin_route': function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin' )){
            console.log('true')
        }else{
            console.log('false')
        }
        return Roles.userIsInRole(Meteor.userId(), 'admin' );
    }
});
