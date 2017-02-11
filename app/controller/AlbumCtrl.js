"use strict"

app.controller("AlbumCtrl", function($scope, $location, SongFactory){

	$scope.getAlbumList = (value) => {
		SongFactory.getAlbum(items)

		.then((itmesArray)=> {
			$scope.albums = itemsArray;
			console.log("itmesArray after getAlbumList from AlbumCtrl", itmesArray );
			$scope.$apply()

		});

	}

	$scope.getAlbumList()

})
