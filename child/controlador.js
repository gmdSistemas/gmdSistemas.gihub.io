angular.module("miApp",[])
.run(function($rootScope) {
	console.log($rootScope);
	$rootScope.nombre="codigo facilito";

})
.controller("miControl", function($scope){
	$scope.nombre="CODF";
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nombre=":3";
		});
	   },1000);
	})

.controller("miControlHijo",function($scope){


});