/**
 * Created by samuel on 13/12/17.
 */
import './absences.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import {Eleves} from "../../../api/eleves/eleves";



Template.absences.onCreated(function () {
    Meteor.subscribe('eleves.all');
});

Template.absences.helpers({
    thisAccount() {
        return Eleves.find({owner: Meteor.userId()});
    },
});
