"use strict"

let app = angular.module("MusicApp", ['ngRoute']);
app.config(function($routeProvider){
	let isAuth = (AuthFactory) => new Promise((resolve, reject)=> {
	AuthFactory.isAuthenticated()
	.then((userExists)=> {
		if(userExists){
			resolve()
		}else{
			reject();
		}
	});
});
	
$routeProvider

.when('/login', {
	templateUrl: 'partials/logIn.html',
	controller: 'LogInCtrl'
})

.when('/songList', {
	templateUrl : 'partials/songList.html',
	controller: 'SongListCtrl'
});
});

app.run(($location, FBCreds)=> {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};
	firebase.initializeApp(authConfig);
});