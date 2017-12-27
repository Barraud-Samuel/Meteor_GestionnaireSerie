// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Eleves } from './eleves.js';
import { Roles } from 'meteor/alanning:roles';
import { Mongo } from 'meteor/mongo'
/////////FACTORISER LE CODE TOUT METTRE DANS UNE SEULE METHODE//////////

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

//methods pour l'ajout de notes
Meteor.methods({
    'note.insert'(matiere,note,eleve_id){
        console.log(matiere);
        console.log(eleve_id);
        console.log(note);
        const objectId = new Meteor.Collection.ObjectID();
        Eleves.update(
            {
                _id: eleve_id
            },
            {
                $push: {
                    notes: {
                        _id: objectId,
                        matiere: matiere,
                        note: note
                    },
                }
            }
        )
    }
});
//suppresion des notes
Meteor.methods({
    'note.delete'(note_id){
        console.log(note_id);
        Eleves.update(
            {
                //pas besoin de mettre d'id de l'eleve car l'id donné pour les notes est unique
                //en revanche il faut ajouter multi:true pour pouvoir modifier plusieurs Id en même temps sans a avoir a les specifier
            },
            {
                $pull: {
                    notes: {
                        _id: note_id
                    }
                }
            },
            {multi:true }
        )
    }
});

//methods pour l'ajout d'absences
Meteor.methods({
    'absence.insert'(matiere,absenceDate,eleve_id){
       console.log(matiere);
       console.log(eleve_id);
       console.log(absenceDate);
        const objectId = new Meteor.Collection.ObjectID();
       Eleves.update(
           {
              _id: eleve_id
           },
           {
            $push: {
                        absences: {
                            _id: objectId,
                            matiere: matiere,
                            absenceDate: absenceDate
                        },
                }
           }
       )
    }
});
// suppressiona des absences
Meteor.methods({
    'absence.delete'(absence_id){
        console.log(absence_id);
        Eleves.update(
            {
                //pas besoin de mettre d'id de l'eleve car l'id donné pour les notes est unique
                //en revanche il faut ajouter multi:true pour pouvoir modifier plusieurs Id en même temps sans a avoir a les specifier
            },
            {
                $pull: {
                    absences: {
                        _id: absence_id 
                    }
                }
            },
            {multi:true }
        )
    }
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
