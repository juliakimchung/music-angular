"use strict"
app.controller("SongListCtrl", function($scope, $http, $sce, SearchTermData, $interplate, AuthFactory, $location){

		let fireUser = AuthFactory.getUser();

		let getSong = (value)=> {
				return new Promise((resolve, reject)=> {


				$http.get(`http://www`), {
				params: {


				}
				.then((results)=> {
						resolve(results);

				})
				.catch((results)=> {
						console.log('error', results);
				});
				}

		});
}

let saveSong =(value) => {
		return new Promise((resolve, reject)=> {
				$http.post(`${FBCreds.URL}/songs.json`, angular.toJson(value))
				.then((itemObject)=> {
						resolve(itemObject);
						console.log("itemObject after saveVideo promise", itemObject)
				})
				.catch((error)=> {
						console.log('error', error)

				});
		});
}

let getSingleSong = (songId)=> {
	return new Promise((resolve, reject)=> {
		$http.get(`${FBCreds.URL}/song/${songId}.json`)
		.then((result)=> {
			console.log("get single song result", result)
			resolve(result);
		})
		.catch((error)=> {
			console.log("error", error)
		})
	})
}

let getAllSavedSongs = (song) => {
		let songColletction = [];

				return new Promise((resolve, reject)=> {
						$http.get(`${FBCreds.URL}/video.json?orderBy='uid'&equalTo="${fireUser}"`)
						.then((results)=> {
							let songDataArray = results.data;
							console.log('songDataArray', songDataArray)
							Object.keys(songDataArray).forEach((key)=> {
								songDataArray[key].id = key;
								songColletction.push(songDataArray)
							});
							resolve(songColletction);
							console.log("songColletction from getAllSavedSongs", songColletction);
						})
						.catch((error)=> {
							console.log('error', error)
						});


				});
		}


})