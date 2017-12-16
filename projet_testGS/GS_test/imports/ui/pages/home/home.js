import './home.html';

import { Meteor } from 'meteor/meteor';
import '../../components/hello/hello.js';
import '../../components/info/info.js';

/*
console.log(Meteor.userId());
if (Roles.userIsInRole(userId, 'admin' )){
    console.log('true')
}else{
    console.log('false')
}
*/
const userId = Meteor.userId();
console.log(userId);
if (Roles.userIsInRole(Meteor.userId(), 'admin' )){
    console.log('true')
}else{
    console.log('false')
}

Meteor.call('define_roles');
