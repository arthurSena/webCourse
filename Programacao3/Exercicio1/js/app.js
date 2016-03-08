var app = angular.module('myApp', []);
app.controller('tableContrl', function($scope) {
    $scope.books = db;
    $scope.is_add = true;
    $scope.temp_book = {
        titulo: '',
        autores: [''],
        descricao: '',
        url: '',
        preco : -1, 
        comentarios:['']
    };
    $scope.merda = ['algum comentario', 'algum comentario'];

    $scope.removeBook = function(index_book){
        $scope.books.splice(index_book, 1);
    }

    $scope.setButton = function(temp){
         $scope.is_add = temp;
    }

    $scope.loadBook = function(index_book){
        $scope.temp_book = $scope.books[index_book];
        $scope.merda = $scope.temp_book.comentarios
    }

    $scope.unLoadBook = function(){
       $scope.temp_book = {
        titulo: '',
        autores: [''],
        descricao: '',
        url: '',
        preco : -1
        
    };
    }

    $scope.editBook = function(index_book){
        $scope.books[index_book] = $scope.temp_book;
        $scope.temp_book = {
            titulo: '',
            autores: [],
            descricao: '',
            url: '',
            preco: -1
        }  
    }

    $scope.addBook = function(){
        $scope.books.push($scope.temp_book);
        console.log($scope.temp_book);
        $scope.temp_book = {
            titulo: '',
            autores: [],
            descricao: '',
            url: '',
            preco: -1
        }  
    }
});