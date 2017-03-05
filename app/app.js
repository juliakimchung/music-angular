"use strict"

let app = angular.module("MusicApp", ['ngRoute']);
angular.module('MusicApp').config(
	[
	'$interpolateProvider',
	'$httpProvider',
	'$routeProvider',
	function($interpolateProvider, $httpProvider, $routeProvider){

	$interpolateProvider.startSymbol('((');
	$interpolateProvider.endSymbol('))');

	$httpProvider.defaults.xsrfCookieName = 'csrfftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';



	$routeProvider
		.when('/login', {
			templateUrl: 'partials/logIn.html',
			controller: 'LogInCtrl'
		})

		.when('/songs', {
			templateUrl : 'partials/songList.html',
			controller: 'SongListCtrl'
		})
		.when('/addSong', {
			templateUrl: 'partials/addSong.html',
			controller: 'addCtrl'
		})
		.when('/addAlbum', {
			templateUrl: 'partials/addAlbum.html',
			controller: 'addCtrl'
		})
		.when('/addArtist', {
			templateUrl: 'partials/addArtist.html',
			controller: 'addCtrl'
		})
		.when('/albums', {
			templateUrl: 'partials/albumList.html',
			controller: 'AlbumCtrl'
		})
		.when('/artists', {
			templateUrl: 'partials/artist.html',
			controller: 'ArtistCtrl'
		});
}
]);
	
