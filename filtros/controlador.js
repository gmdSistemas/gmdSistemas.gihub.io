angular.module("filtroModulo",[])
.filter("removeHtml",function(){
	return function(texto){
		//return texto.toUpperCase();
		return String(texto).replace(/<[^>]+>/gm,'');
	}

	})
.controller("FiltroContralador",function($scope){
	$scope.mi_html = {};
	$scope.mi_html.titulo="hola";
	$scope.mi_html.body="hola a todos";
	$scope.mi_html.costo=1500;
	//$scope.fecha=getdate();
	//$scope.mi_html="<p>Hola Mundo</p>"

});
