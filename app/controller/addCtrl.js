"use strict"
app.controller("addCtrl", function( $scope, $location, SongFactory){
	$scope.addSong = {
		title: "",
		song_length: "",
		release_date: "",
		artist: "",
		genre: "",
		album: ""

	}
	$scope.addArtist = {
		name: "",
		gender: ""
	}
	$scope.addAlbum = {
		title: "",
		label:"",
		album_length:"",
		release_date:""
	}
	$scope.addGenre = {}
	$scope.title = "Add Your Choice";
	$scope.btnText = "Save ";


	$scope.addNewSong =()=> {
		SongFactory.saveNewSong($scope.addSong)
		.then((value) => {
			$location.url("#!/songList")
			$scope.$apply();
		});
	};


	$scope.addNewAlbum = () => {
		SongFactory.saveNewAlbum($scope.addAlbum)
		.then((value)=> {
			$location.url('#!/albumList')
			$scope.$apply();
		});
	};

	$scope.addNewArtist = () => {
		SongFactory.saveNewArtist($scope.addArtist)
		.then((value)=> {
			$location.url('#!/artistList')
			$scope.$apply();
		});
	}




});