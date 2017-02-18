(function(){
    'use strict';

    
angular.module('app').config(routeConfig);
    
    routeConfig.$inject = ['$routeProvider'];
    
    function routeConfig ($routeProvider){
    $routeProvider
    .when('/',{
        controller: 'MenuEscolaController',
        controllerAs: 'vm',
        templateUrl: 'views/escola.html'
    })
    .when('/adicionarAluno',{
        controller: 'AdicionarEscolaController',
        controllerAs: 'vm',
        templateUrl: 'views/adicionarAluno.html',
        authorize: true
    })
    .when('/professor',{
        controller: 'ProfessorEscolaController',
        controllerAs: 'vm',
        templateUrl: 'views/professor.html',
        authorize: true
    })
    .when('/adicionarNota',{
        controller: 'AdicionarEscolaController',
        controllerAs: 'vm',
        templateUrl: 'views/adicionarNota.html',
        authorize: true
    })
    .when('/editarNota',{
        controller: 'EditarEscolaController',
        controllerAs: 'vm',
        templateUrl: 'views/adicionarNota.html',
        authorize: true
    })
    .when('/aluno',{
         controller: 'AlunoEscolaController',
        controllerAs: 'vm',
        templateUrl: 'views/aluno.html',
        authorize: true
    })
    .otherwise({
        controller: 'MenuEscolaController',
        controllerAs: 'vm',
        templateUrl: 'views/escola.html'
    });
};


})();