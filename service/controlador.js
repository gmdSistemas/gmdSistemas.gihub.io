angular.module("myApp", ["LocalStorageModule"])
.service('todoServicio',function(localStorageService){
	//var todoServicio={};
	
	this.key="angular-todolistado";

	if(localStorageService.get(this.key)){

		this.actividades = localStorageService.get(this.key);

	}
	else{
		this.actividades=[];
	}

	this.incluir=function(nuevaActv){
		this.actividades.push(nuevaActv);

		this.actulizarLocalStorage();

	};
	this.actulizarLocalStorage=function(){
		localStorageService.set(this.key,this.actividades);


	};	
	this.limpiar=function(){
		this.actividades=[];
		this.actulizarLocalStorage();
		return this.getAll();

	};
	this.getAll = function(){
		return this.actividades;
	};

	this.removerItem=function(item){
		this.actividades=this.actividades.filter(function(actividad){
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
		this.actulizarLocalStorage();
		return this.getAll();
	}

//	return todoServicio;


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
