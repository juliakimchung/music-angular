"use strict"
app.controller("addCtrl", function( $scope, $location, SongFactory){
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
	$scope.title = "Add Your Choice";
	$scope.btnText = "Save ";


	$scope.addNewSong =()=> {
		SongFactory.saveNewSong($scope.addSong)
		.then((value) => {
			$location.url("#!/songList")
			$scope.$apply()
		});
	};


	$scope.addNewAlbum = () => {
		SongFactory.saveNewAlbum($scope.addAlbum)
		.then((value)=> {
			$location.url('#!/albumList')
			$scope.apply()
		});
	};

	$scope.addNewArtist = () => {
		SongFactory.saveNewArtist($scope.addArtist)
		.then((value)=> {
			$location.url('#!/artistList')
			$scope.apply()
		});
	}




});