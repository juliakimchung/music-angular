"use strict"

app.controller('SongListCtrl', function($scope){
	$scope.title = "Welcome to your song list";
	$scope.texts = "This is where you can list out your song list"
	$scope.songs = [
	{title: "Tonight", artist: "Bigbang"},
	{title: "Hello", artist: "Adele"},
	{title: "We are never ever getting bact together", artist: "Taylor Swift"}

	];
});
