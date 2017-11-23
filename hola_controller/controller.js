//opcion 1

/*
var app = angular.module("myApp",[]);
	app.controller("MiprimerControl",function($scope){
		$scope.nombre="darwin 1";
	})
*/
	//opcion dos encadenado metodos


	/*
	*************************************
	OTRA MANERA PASAR TODOS COMO ARREGLO DONDE EL ULTIMO PARAMETRO DE ARREGLO ES LA FUNCION
	angular.module("myApp",[])
	.controller("MiprimerControl",function($scope){
		$scope.nombre="darwin 2";
		$scope.nuevoComentario = {};
		$scope.comentarios=[
				{
					comentario: "Buen Tutorial",
					username:"pedro feliz"

				},
				{
					comentario: "otro comentario acido",
					username:"el acido"

				}
		];
		$scope.agregarComentario = function(){
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario= {};
		}
	});

para minimificar re recomienda una sola letra
*/ 
angular.module("myApp",[])
	.controller("MiprimerControl",["$scope,function(m){
		m.nombre="darwin 2";
		m.nuevoComentario = {};
		m.comentarios=[
				{
					comentario: "Buen Tutorial",
					username:"pedro feliz"

				},
				{
					comentario: "otro comentario acido",
					username:"el acido"

				}
		];
		m.agregarComentario = function(){
			m.comentarios.push(m.nuevoComentario);
			m.nuevoComentario= {};
		}
	} ] );
