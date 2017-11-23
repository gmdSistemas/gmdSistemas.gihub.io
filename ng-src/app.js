angular.module("directivaPers",[])
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
	}
})
/* este estilo de nuestra directiva personalizada
style="background:url({{repo.owner.avatar_url}});background-position:center;background-size:cover;"
*/
.controller("appControl", function($scope,$http){
	$http.get("https://api.github.com/users/codigofacilito/repos")
	.then(function(data) {
		console.log("ante",$scope.repos);
		console.log(data);
		$scope.repos=data.data;
	})
	.catch(function(error) {
		console.log('tipo de Error', error);
	});
});
