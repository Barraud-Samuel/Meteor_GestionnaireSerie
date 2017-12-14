/**
 * Created by samuel on 13/12/17.
 */
import { Eleves } from '/imports/api/eleves/eleves.js';
import { Meteor } from 'meteor/meteor';
import './edit_profile.html'

Template.info.onCreated(function () {
    Meteor.subscribe('eleves.all');
});

Template.edit_profile.events({
    'submit .profile-modification'(event){
        event.preventDefault();

        const target = event.target;
        const username = target.username;
        const email = target.email;
        const githubLink = target.githubLink;
        const user_id = Meteor.userId();
        console.log(user_id);

        Meteor.call('eleves.upsert', username.value, email.value, githubLink.value, (error)=>{
            if (error) {
                console.log(error);
            } else {
                username.value = '';
                email.value = '';
                githubLink.value = '';
            }
        });
    }
});






Template.info.helpers({
    eleves() {
        return Eleves.find({});
    },
});

Template.info.events({
    'submit .info-link-add'(event) {
        event.preventDefault();

        const target = event.target;
        const title = target.title;
        const url = target.url;

        Meteor.call('eleves.insert', title.value, url.value, (error) => {
            if (error) {
                alert(error.error);
            } else {
                title.value = '';
                url.value = '';
            }
        });
    },
});
