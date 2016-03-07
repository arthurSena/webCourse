var app = angular.module('myApp', []);
app.controller('tableContrl', function($scope) {
    $scope.books = db;
    $scope.temp_book = {
    	titulo: '',
		autores: [''],
		descricao: '',
		url: '',
		preco: -2
    };

    $scope.removeBook = function(index_book){
    	$scope.books.splice(index_book, 1);
    }

    $scope.addBook = function(){
    	$scope.books.push($scope.temp_book);
    	$scope.temp_book = {
    		titulo: '',
			autores: [],
			descricao: '',
			url: '',
			preco: -2		
    	}
    }
});