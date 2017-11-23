angular.module("directivaPers", ["ngRoute"])
.config(function($routeProvider) {
	$routeProvider
	.when("/",{
		controller:"appControl",
		templateUrl:"templates/home.html"
	})
	.when("/repo/:name",{
		controller:"RepoControl",
		templateUrl:"templates/repo.html"

	})
	.otherwise("/");


});
