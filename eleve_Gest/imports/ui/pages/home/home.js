import './home.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/absences/absences.js';
import '../../components/edit_profile/edit_profile.js';
import '../../components/nav_bar/nav_bar.js';
import '../../components/notes/notes.js';
import '../../components/profile/profile.js';



Meteor.subscribe('users');

Template.App_home.helpers({
    //le temps que meteor connect le user, meteor declanche une erreur dans la console
    // je pense qu'il faut rajouter une condition pour voir si quelqu'un est connecté ou faire ça coté serveur.
     userEmail: function() {  return Meteor.user().emails[0].address; },
});

//Helpers de redirection pour les Admin. (De la page home vers la page Admin)
//la première fois que l'on connecte un user apres avoir connecté un Admin dans l'url on vois /Admin
//alors que ce sont les bons templates d'affiché et inversement pour l'admin
//je pense que c'est parce que les "middleware" ne rafraichissent pas le serveur et la page donc ça affiche seulement le bon tempalte
//et ne redirige pas sur la page (mais les éléments qui doivent s'aficher sont les bons, je ne sais pas si d'un point securité ça passe)
Template.App_home.helpers({
    redirectionAdmin: function () {
        FlowRouter.go("/Admin");
    },
});

Template.App_home.helpers({
    redirectionUser: function () {
        FlowRouter.go("/");
    },
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



//une fois l'user crée, il est redirigé vers la home et on en profite pour lui assigner un role
//je ne sais pas comment trigger l'ajout de rôle autrement
//ce serai mieu de le trigger a la création, (mais ça marche)
Meteor.call('define_roles');
