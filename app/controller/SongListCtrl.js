"use strict"

app.controller("SongListCtrl", function($scope,  SongFactory, $location ){
	// $scope.searchText = SerchTermData;
	$scope.getSongList = (value)=> {
				SongFactory.getSongs(value)

				.then((songArray)=> {
					$scope.songs = songArray;
					console.log("songArray from SongListCtrl", songArray );
					$scope.$apply()
					})
				}


	$scope.getSongList()

})




