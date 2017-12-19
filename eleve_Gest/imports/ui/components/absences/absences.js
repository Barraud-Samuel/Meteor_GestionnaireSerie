/**
 * Created by samuel on 13/12/17.
 */
import './absences.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import {Eleves} from "../../../api/eleves/eleves";




Template.absences.helpers({
    absences: [
        { matiere:'Developpement Front', date: '12', valide: 'valide'},
        { matiere: 'Clean Design', date:'15', valide: 'non valide' },
        { matiere: 'Gestion de projet', date:'13', valide: 'valide' },
        { matiere: 'Gestion de projet', date:'17', valide: 'valide' },
    ],
});

//recuperation des absences de l'elève e question
/*
Template.profile.helpers({
    infosAccount() {
        return Eleves.find({owner: Meteor.userId()});
    },
});*/
