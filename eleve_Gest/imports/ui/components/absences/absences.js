/**
 * Created by samuel on 13/12/17.
 */
import './absences.html';
import { Template } from 'meteor/templating';


Template.absences.helpers({
    absences: [
        { matiere:'Developpement Front', date: '12', valide: 'valide'},
        { matiere: 'Clean Design', date:'15', valide: 'non valide' },
        { matiere: 'Gestion de projet', date:'13', valide: 'valide' },
        { matiere: 'Gestion de projet', date:'17', valide: 'valide' },
    ],
});