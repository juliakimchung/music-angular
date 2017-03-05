"use strict"
app.factory("SongFactory", function( $http, $location){
let artistArr = [];
let albumListArr = [];
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

		})
			resolve(songListArr);
		})
		.catch((error)=> {
			console.log("getSongs from song Factory error", error );
		});
	})
}


let getAlbum = (album) => {
	return new Promise((resolve, reject) => {
		$http.get(`http://localhost:8000/api/album/`)
		.then((itemObject) => {
			console.log('itemObject after get album', itemObject)
			let albumCollection = itemObject.data;
			Object.keys(albumCollection).forEach((key)=>{
				albumCollection[key].id = key;
				albumListArr.push(albumCollection[key]);
			})
			console.log("albumListArr from SongFactory",albumListArr );
			resolve(albumListArr);
		})
		.catch((error)=> {
			console.log("error", error );
		});
	});
}

let getArtist = (artist) => {
	return new Promise((resolve, reject) => {
		$http.get(`http://localhost:8000/api/artist/`)
		.then((itemObject) => {
			let artistCollection = itemObject.data;
			Object.keys(artistCollection).forEach((key)=> {
				artistCollection[key].id = key;
				artistArr.push(artistCollection[key]);
			})
			console.log('itemObject after get artist', itemObject)
			resolve(artistArr);
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
			console.log("error", error);
		});
	});
}

let saveNewAlbum = (newAlbum) => {
	return new Promise((resolve, reject)=> {
		$http.post(`http://localhost:8000/api/album/`, angular.toJson(newAlbum))
		.then((newAlbum)=> {
			resolve(newAlbum);

		})
		.catch((error)=> {
			console.log("error", error);
		})
	})
}

let saveNewArtist = (newArtist) => {
	return new Promise((resolve, reject)=> {
		$http.post(`http://localhost:8000/api/artist/`, angular.toJson(newArtist))
		.then((newArtist)=> {
			console.log("newArtist after saveNewArtist from SongFactory", newArtist);
			resolve(newArtist);
		})
		.catch((error)=> {
			console.log("error",error );
		});
	});
}

		return {getSongs, getAlbum, getArtist, saveNewSong, saveNewAlbum, saveNewArtist};
})
