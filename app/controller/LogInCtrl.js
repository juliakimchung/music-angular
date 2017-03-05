"use strict";
app.controller("LogInCtrl", function($scope, $http, $location){
	

	$scope.user= {
		username: "rodypony",
		password: "123456",
		email: 'jul@me.com',
		first_name: "Rody",
		last_name: "Pony",
	};
	$scope.register = () => {
		$http({
			url: "/#!/login",
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: {
				'username': $scope.user.username,
				'password': $scope.user.password,
				'email': $scope.user.email,
				'first_name': $scope.user.first_name,
				'last_name': $scope.user.last_name
				}
		})
		.then((userData)=> {
			if(userData.data.success == true){
				$location.path('/#!/songs/')
			}
		});
	};
	$scope.login =() => {
		$http({
			url: "/#!/login",
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlendcoded"
			},
			data: {
				'username': $scope.user.username,
				'password': $scope.user.password
			}
		})
		.then((user) => {
				if (user.data.success == true){
			 			console.log("user after login", user );
			 			$location.path('/#!/songs/');

				} 
				else{
					console.log("registrations failed")
				}
		});
	};
});

