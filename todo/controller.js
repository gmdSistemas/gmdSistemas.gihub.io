angular.module("myApp", ["LocalStorageModule"])
.controller("todoControl",function($scope,localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}
	else{
		$scope.todo=[];


	}

	/*

	angular.module('LetCodeApp',[

 	'ui.router',
 	'firebase'

 	])
      //luego siempre hay que registrarlo  .controller("nombre de controlador" ,funcion que contiene el nombre de ese controlador)
      .config(config)
      .controller('ProductsCtrl', ProductsCtrl)
      .controller('ProductsAdicionalCtrl',ProductsAdicionalCtrl)
      .controller('ProductosEditarCtls',ProductosEditarCtls)
      .service('ProductosServicios',ProductosServicios);



}());
		{
			descripcion: "Terminar el curso Angular".
			fecha:"27-07-2017 2:00pm"
	

		}
	*/
	$scope.$watchCollection('todo',function(newValue,oldValue){
		localStorageService.set("angular-todolist",$scope.todo);

	});
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		//localStorageService.set("angular-todolist",$scope.todo);
	}
});
/*
angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
	if(localStorageService.get("angular-todolist")){
	$scope.todo = localStorageService.get("angular-todolist");
}
	else{ 
			$scope.todo = [];
	}
		
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv ={};
		localStorageService.set("angular-todolist",$scope.todo);
		
		
	}
});
*/