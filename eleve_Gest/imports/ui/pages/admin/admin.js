/**
 * Created by samuel on 15/12/17.
 */
import './admin.html';
import {Meteor} from "meteor/meteor";

//je triggre l'attribution de role également sur lla page admin si j'amais l'utilisateur qui creéer son compte est
//un admin qui sera donc redirigé sur la page admin

Meteor.call('define_roles');
