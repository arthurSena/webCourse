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

    $scope.comentario_temp = "";

    $scope.addComment = function(){
        $scope.books = $scope.books.filter(function(el) {
            return el.titulo != $scope.temp_book.titulo;
        });
        $scope.temp_book.comentarios.push($scope.comentario_temp);
        $scope.books.splice(0,0,$scope.temp_book);
    }

    $scope.removeBook = function(index_book){
        $scope.books.splice(index_book, 1);
    }

    $scope.setButton = function(temp){
         $scope.is_add = temp;
    }

    $scope.loadBook = function(index_book){
        $scope.temp_book = $scope.books[index_book];
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