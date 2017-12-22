/**
 * Created by samuel on 13/12/17.
 */
import './notes.html';
import { Template } from 'meteor/templating';
import {Meteor} from "meteor/meteor";
import {Eleves} from "../../../api/eleves/eleves";

Template.notes.onCreated(function () {
    Meteor.subscribe('eleves.all');
});

Template.notes.helpers({
    thisAccount() {
        return Eleves.find({owner: Meteor.userId()});
    },
});
