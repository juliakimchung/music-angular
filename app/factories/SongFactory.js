"use strict"
app.factory("SongFactory", function( $http, $location){


let songListArr = [];
let getSongs = (song) => {
	return new Promise((resolve, reject) => {
		$http.get(`http://localhost:8000/api/song/`)
		.then((itemObject) => {
			let songCollection = itemObject.data;
			console.log('itemObject after get songs', itemObject)
			Object.keys(songCollection).forEach((key) => {
					songCollection[key].id = key;
					songListArr.push(songCollection[key]);

				resolve(songListArr);
		})
		.catch((error)=> {
			console.log("getSongs from song Factory error", error );
		});
	})
})
}

let getAlbum = (album) => {
	return new Promise((resolve, reject) => {
		$http.get(`http://localhost:8000/api/album/`)
		.then((itemObject) => {
			resolve(itemObject);
			console.log('itemObject after get album', itemObject)
		})
		.catch((error)=> {
			console.log("error", error );
		})
	})
}

let getArtist = (artist) => {
	return new Promise((resolve, reject) => {
		$http.get(`http://localhost:8000/api/artist/`)
		.then((itemObject) => {
			resolve(itemObject);
			console.log('itemObject after get artist', itemObject)
		})
		.catch((error)=> {
			console.log("error", error );
		})
	})
}	

let saveNewSong = (newSong) => {
	return new Promise((resolve, reject)=> {
		$http.post(`http://localhost:8000/api/song/`, angular.toJson(newSong))
		.then((newSong)=> {
			resolve(newSong);

		})
		.catch((error)=> {
			console.log("error", error)
		});
	});
};

let saveNewAlbum = (newAlbum) => {
	return new Promise((resolve, reject)=> {
		$http.post(`http://localhost:8000/api/album/`, angular.toJson(newAlbum))
		.then((newAlbum)=> {
			resolve(newAlbum);

		})
		.catch((error)=> {
			console.log("error", error)
		});
	});
};
// let saveSong =(value) => {
// 		return new Promise((resolve, reject)=> {
// 				$http.post(`${FBCreds.URL}/songs.json`, angular.toJson(value))
// 				.then((itemObject)=> {
// 						resolve(itemObject);
// 						console.log("itemObject after saveVideo promise", itemObject)
// 				})
// 				.catch((error)=> {
// 						console.log('error', error)

// 				});
// 		});
// }

// let getSingleSong = (songId)=> {
// 	return new Promise((resolve, reject)=> {
// 		$http.get(`${FBCreds.URL}/song/${songId}.json`)
// 		.then((result)=> {
// 			console.log("get single song result", result)
// 			resolve(result);
// 		})
// 		.catch((error)=> {
// 			console.log("error", error)
// 		})
// 	})
// }

// let getAllSavedSongs = (song) => {
// 		let songColletction = [];

// 				return new Promise((resolve, reject)=> {
// 						$http.get(`${FBCreds.URL}/song.json?orderBy='uid'&equalTo="${fireUser}"`)
// 						.then((results)=> {
// 							let songDataArray = results.data;
// 							console.log('songDataArray', songDataArray)
// 							Object.keys(songDataArray).forEach((key)=> {
// 								songDataArray[key].id = key;
// 								songColletction.push(songDataArray)
// 							});
// 							resolve(songColletction);
// 							console.log("songColletction from getAllSavedSongs", songColletction);
// 						})
// 						.catch((error)=> {
// 							console.log('error', error)
// 						});


// 				});
// 		}
		return {getSongs, getAlbum, getArtist, saveNewSong, saveNewAlbum};
})
