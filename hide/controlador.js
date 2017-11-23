angular.module("myApp1",[])
	.controller("controluno",function($scope,$http){
		$scope.posts=[];
		$scope.cargando=true;
		$http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function(data) {
			console.log("ante",$scope.posts);
    		console.log(data);
    		$scope.posts=data.data;
        $scope.cargando=false;
  		})
  		.catch(function(error) {
    		console.log('tipo de Error', error);
        $scope.cargando=false;
  		});
  	
  	
	});
