"use strict"

app.controller("SongListCtrl", function($scope,  SongFactory, $location ){
	// $scope.searchText = SerchTermData;
	$scope.getSongList = (value)=> {
				SongFactory.getSongs(value)

				.then((results)=> {
					console.log(results);
					
					})
					
				
				
				}


	$scope.getSongList()

})




