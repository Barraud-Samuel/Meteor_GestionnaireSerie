import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/notes/notes.js';
import '../../ui/pages/absences/absences.js';
import '../../ui/pages/admin/admin.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    if (Meteor.userId()){
        //adminOruserRouteforHomepage();
        BlazeLayout.render('App_body', { main: 'App_home' });
    }else{
        FlowRouter.go("/Login");
        console.log('log');
    }
  },
});

FlowRouter.route('/Login', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_login' });
    },
});

FlowRouter.route('/Profil', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_profile' });
    },
});

FlowRouter.route('/Notes', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notes' });
    },
});

FlowRouter.route('/Absences', {
    action() {
        BlazeLayout.render('App_body', { main: 'App_absences' });
    },
});

// admin route
FlowRouter.route('/Admin', {
    action() {
        //adminOruserRouteforAdmin();
        BlazeLayout.render('App_body', { main: 'App_admin' });
    },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

//HELPERS DE REDIRECTION
Template.registerHelper( 'isAdmin', () => {
    return Roles.userIsInRole(Meteor.userId(), 'admin' );
});
Template.registerHelper( 'isUser', () => {
    return Roles.userIsInRole(Meteor.userId(), 'user' );
});


//Admin condition function
//peut etre que flow router inclut un systeme de route pour les admin
//pour le moment je n'ai trouvé que cette solution pour palier ce probleme
// bonne pratique ou pas, je ne sais pas.
//Le problème serai que dans l'URL le /admin est toujour affiche alors que l'on est dans le template App_home

/*function adminOruserRouteforHomepage() {
    Meteor.call('admin_route', function (error, result) {
        if(error){
            console.log(error);
        } else {
            console.log(result);
            if (result === true){
                console.log('Vous pouvez accedez a l espace admin');
                FlowRouter.go("/admin");
                //BlazeLayout.render('App_body',{main: 'App_admin'});
            }else{
                console.log('vous pouvez accedez a l espace user');
                BlazeLayout.render('App_body', { main: 'App_home' });
            }
        }
    });
}

function adminOruserRouteforAdmin() {
    Meteor.call('admin_route', function (error, result) {
        if(error){
            console.log(error);
        } else {
            console.log(result);
            if (result === true){
                console.log('Vous pouvez accedez a l espace admin');
                FlowRouter.go("/admin");
                //BlazeLayout.render('App_body',{main: 'App_admin'});
            }else{
                console.log('vous pouvez accedez a l espace user');
                //BlazeLayout.render('App_body', { main: 'App_home' });
                FlowRouter.go("/");
            }
        }
    });
}*/



////////////// A FAIRE POUR LA PROCHAINE FOIS, LES PROBLEMES RENCONTRES//////////////
// le packet meteor-useraccounts/flow-routing redirige automatiquement vers la  home au click du login
// j'essaye de redirigé ver la pag admin si l'utilisateur n'est pos admin
//si j'enlebe le template d'une route ça va bien me rediriger vers la bonne page mais pas de tempalte, rien s'affiche
//si je laisse le temlplate, les user qui ne sont pas admin peut voir la page admin pendant une demie seconde
// il faut etre redirigé vers la page admin avec le bon tempalte a l'interieur
//je vais test de rediriger directement  grâce aux templates