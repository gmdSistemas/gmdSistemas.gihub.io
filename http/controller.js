angular.module("myApp1",[])
	.controller("controluno",function($scope,$http){
		$scope.posts=[];
		$scope.newPost={};
		$http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function(data) {
			console.log("ante",$scope.posts);
    		console.log(data);
    		$scope.posts=data.data;
  		})
  		.catch(function(error) {
    		console.log('tipo de Error', error);
  		});
  		$scope.addPost=function(){
  			$http.post("https://jsonplaceholder.typicode.com/posts",{
  				title:$scope.newPost.title,
  				body:$scope.newPost.body,
  				userId:1



  			})
  			.then(function(data,status,headers,config){
  				console.log("aqui la variable",data);
  				console.log("aqui la variable statis",status);
  				//$scope.posts.push($scope.newPost);
  				$scope.posts.push(data.data);
  			//	$scope.addPost={};

  			})
  			.catch(function(error,status,headers,config){
  				console.log(error);

  			});


  		}

	
	});
