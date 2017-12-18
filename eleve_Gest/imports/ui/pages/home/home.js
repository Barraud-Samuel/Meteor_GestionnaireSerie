import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/absences/absences.js';
import '../../components/edit_profile/edit_profile.js';
import '../../components/nav_bar/nav_bar.js';
import '../../components/notes/notes.js';
import '../../components/profile/profile.js';



Meteor.subscribe('users');

Template.App_home.helpers({
    // move this line to Template.user.helpers
     userEmail: function() {  return Meteor.user().emails[0].address; },
});

//ne sert a rien a part display le role dans le client revoie toujours false quand la page login est trigger par la home
import {Meteor} from "meteor/meteor";
const userId = Meteor.userId();
console.log(userId);
if (Roles.userIsInRole(Meteor.userId(), 'admin' )){
    console.log('true')
}else{
    console.log('false')
}



//une fois l'user crée, il est redirigé vers la home et on en profite pour lui assigné un role
//je ne sais pas comment trigger l'ajout de rôle autrement
//ce serai mieu de le trigger a la création, (mais ça marche)
Meteor.call('define_roles');
