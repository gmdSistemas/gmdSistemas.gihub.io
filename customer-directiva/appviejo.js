angular.module("directivaPers",[])
.directive("myAutoCompleta",function(){
	function link(scope,element,attrs) {


		$(element).autocomplete({
			source: scope.$eval(attrs.myAutocompleta),
			select: function(ev,ui){
				ev.preventDefault();
				if(ui.item){
				scope.opcionSeleccionada(ui.item.value);
				console.log("entro aqui");

				}
			},
			focus: function(ev,ui) {
				ev.preventDefault();
				$(this).val(ui.item.label);

			}

		});
		};
	return{
		link: link
	};
}
	console.log("AQUI");)
.directive('backImg',function(){
	return function (scope,element,attrs) {
		//$observe es un metodo de los atributo que recibe los parametro la funcion que va ejecurtar la directiva
		attrs.$observe('backImg',function(value) {
			element.css({
				"background": "url(" +value+")",
				"background-size": "cover",
				"background-position": "center"
			});
		});
	};
})
/* este estilo de nuestra directiva personalizada
style="background:url({{repo.owner.avatar_url}});background-position:center;background-size:cover;"
*/
.controller("appControl", function($scope,$http){
	$scope.repos=["CF","DARWIN","OTRA COSA"];


	$http.get("https://api.github.com/users/codigofacilito/repos")
	.then(function(data) {
		console.log("ante",$scope.repos);
		console.log(data);
		$scope.repos=data.data;
	})
	.catch(function(error) {
		console.log('tipo de Error', error);
	});
	$scope.opcionSeleccionada=function(data.data){
		$scope.$apply(function(){
		$scope.main_repo=data.data;
		})
	}
});
