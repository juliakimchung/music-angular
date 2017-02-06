"use strict"

app.controller("SongListCtrl", function($scope, $sce, SongFactory,$location, AuthFactory ){
	// $scope.searchText = SerchTermData;

	$scope.getSong = (value)=> {
				SongFactory.getSongs(value)
				
				.then((results)=> {
					console.log(results)
						// resolve(results);

				})
				.catch((results)=> {	
						console.log('getSong error', results);
				});
				}

	$scope.saveToMySong = (song)=> {
			SongFactory.saveSong(song)
			.then(function(){
				console.log('song from saveToMySong', song)
			})
			.catch((error)=> {
				console.log('song from saveToMySong error', error);
			});
		}

	$scope.getSong();
	
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

