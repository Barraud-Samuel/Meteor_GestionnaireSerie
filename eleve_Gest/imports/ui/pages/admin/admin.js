/**
 * Created by samuel on 15/12/17.
 */
import './admin.html';
import '../../components/nav_bar/nav_bar.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Meteor} from "meteor/meteor";
import { Roles } from 'meteor/alanning:roles';
import {Eleves} from "../../../api/eleves/eleves";

Template.note_admin.events({
    'submit .adding_notes'(event){
        event.preventDefault();
        const target = event.target;
        const matiere = target.matiere;
        const note = target.note;

        const eleve_id = this._id
        console.log(eleve_id);
        console.log(note.value);
        Meteor.call('note.insert', matiere.value, note.value, eleve_id);
    },
});

Template.absences_admin.events({
    'submit .adding_absences'(event){
        event.preventDefault();
        const target = event.target;
        const matiere = target.matiere;
        const absenceDate = target.absenceDate;

        const eleve_id = this._id
        console.log(eleve_id);
        console.log(absenceDate.value);
        Meteor.call('absence.insert', matiere.value, absenceDate.value, eleve_id);
    },
});

//events pour le delete de note ou d'absences
Template.absences_admin.events({
   'click .delete' (event){
       //const absence_id = this.absence_id;
       const target = event.target;
       const absenceDid= target.absenceDid;
       const eleve_id = this._id
       //var absence_id
       console.log(absenceDid);
       Meteor.call('absence.delete', eleve_id);

   }
});

//recuperation des elements de la bdd par le client
Template.App_admin.onCreated(function () {
    Meteor.subscribe('eleves.all');
});

Template.App_admin.onCreated(function () {
   Meteor.subscribe('userData')
});

Template.App_admin.helpers({
   user: function () {
       return Meteor.users.find({});
   },
});

Template.App_admin.helpers({
    infosAccount() {
        return Eleves.find({});
    },
});

/*Template.App_admin.helpers({
   user(){
       return Meteor.user.find({});
   }
});*/

//Helpers de redirection pour les user. (De la page admin vers la page home)
Template.App_admin.helpers({
    redirectionHome: function () {
        FlowRouter.go("/");
    },
});

//je trigger l'attribution de role également sur lla page admin si j'amais l'utilisateur qui creéer son compte est
//un admin qui sera donc redirigé sur la page admin
Meteor.call('define_roles');
