"use strict"

app.cotroller("SongListCtrl", function($scope, $sce, SongFactory,$location, AuthFactory, SerchTermData ){
	$scope.searchText = SerchTermData;

	SongFactory.getAllSavedSongs()
	.then((songData)=> {
		$scope.data = SongData;
		$scope.$apply();
		console.log("song from the SongListCtrl", songData);
	});

	
})

// app.controller('SongListCtrl', function($scope){
// 	$scope.title = "Welcome to your song list";
// 	$scope.texts = "This is where you can list out your song list"
// 	$scope.songs = [
// 	{title: "Tonight", artist: "Bigbang"},
// 	{title: "Hello", artist: "Adele"},
// 	{title: "We are never ever getting bact together", artist: "Taylor Swift"}

// 	];

// $scope.killSong = function(song){
// 		var songIndex = $scope.songs.indexOf(song);

// 		if (songIndex>= 0) {
// 			$scope.songs.splice(songIndex, 1);
// 		}
// 	}

// });

