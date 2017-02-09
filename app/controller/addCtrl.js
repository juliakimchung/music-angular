"use strict"
app.controller("addCtrl", function($http,$location, $AuthFactory, $SongFactory){
	$scope.addSong = {
		song_title: "",
		song_length: "",
		year_released: "",
		artist: "",
		genre: "",
		album: ""

	}
	$scope.addArtist = {}
	$scope.addAlbum = {}
	$scope.addGenre = {}
	$scope.title = "Add a new song";
	$scope.btnText = "Save your new song";


	$scope.addNewSong =()=> {
		SongFactory.postSong($scope.addSong)
		.then((value) => {
			$location.url("songs/list")
			$scope.$apply()
		});
	};

	$scope.addAlbum = () => {
		SongFactory.postAlbum($scope.addAlbum)
		.then((value)=> {
			$location.url('album/list')
			$scope.apply()
		});
	};




});