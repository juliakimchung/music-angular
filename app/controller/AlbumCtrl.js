"use strict"

app.controller("AlbumCtrl", function($scope, $location, SongFactory){

	$scope.getAlbumList = (value) => {
		SongFactory.getAlbum(value)

		.then((albumArray)=> {
			$scope.albums = albumArray;
			console.log("itmesArray after getAlbumList from AlbumCtrl", albumArray );
			$scope.$apply();

		});

	}

	$scope.getAlbumList()

})
