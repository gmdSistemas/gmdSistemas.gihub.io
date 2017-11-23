angular.module("myApp", ["LocalStorageModule"])
.factory('todoServicio',function(localStorageService){
	var todoServicio={};
	
	todoServicio.key="angular-todolistado";

	if(localStorageService.get(todoServicio.key)){

		todoServicio.actividades = localStorageService.get(todoServicio.key);

	}
	else{
		todoServicio.actividades=[];
	}

	todoServicio.incluir=function(nuevaActv){
		todoServicio.actividades.push(nuevaActv);

		todoServicio.actulizarLocalStorage();

	};
	todoServicio.actulizarLocalStorage=function(){
		localStorageService.set(todoServicio.key,todoServicio.actividades);


	};	
	todoServicio.limpiar=function(){
		todoServicio.actividades=[];
		todoServicio.actulizarLocalStorage();
		return todoServicio.getAll();

	};
	todoServicio.getAll = function(){
		return todoServicio.actividades;
	};

	todoServicio.removerItem=function(item){
		todoServicio.actividades=todoServicio.actividades.filter(function(actividad){
			return actividad !== item;

			/*
		corrida en frio de removeritem
		este ejemplo tenemos 
		[{actividad:"terminar el curso",fecha:"12/12/2017- 12:00pm"} ,{},{}] -->todoServico.actividades
		removerItem pregunta con se filter iterar todo el arreglo y return compara si 
		removerItem({actividad:"terminar el curso",fecha:"12/12/2017- 12:00pm"}= a la primera posicion de arreglo)
		si verdadeero no retorna ese valor lo elimina estonbe lo va retornar si eses elemento

		*/


		});
		todoServicio.actulizarLocalStorage();
		return todoServicio.getAll();
	}

	return todoServicio;


})
.controller("todoControl",function($scope,todoServicio){
	
	$scope.todo=todoServicio.getAll();
	$scope.nuevaActv={};
        $scope.addActv=function(){
    	todoServicio.incluir($scope.nuevaActv);
    	$scope.nuevaActv={};
   
	}
	$scope.removerAct=function(item){
		$scope.todo=todoServicio.removerItem(item);
	}

	$scope.limpiar=function(){
		//console.log("preuab");
	  $scope.todo=todoServicio.limpiar();

	}
	//console.log("aqui ");
});
