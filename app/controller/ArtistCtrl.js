"use strict"

app.controller("ArtistCtrl", function($scope, SongFactory, $location, SearchTermData){
	$scope.searchText = SearchTermData;
	$scope.getArtistList = (value) => {
		SongFactory.getArtist(value)
		.then((artistArr)=> {
			$scope.artists = artistArr;
			console.log("artistArr from ArtistCtrl", artistArr );
			$scope.$apply()

		})
	}
	$scope.getArtistList()
})