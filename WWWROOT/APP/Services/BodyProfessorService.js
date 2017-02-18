(function(){
    'use strict';

    angular.module('app').service('BodyProfessorService', BodyProfessorService);

    BodyProfessorService.$inject = ['$rootScope', '$http']; 

    function BodyProfessorService($rootScope, $http){

        var vm = this;
        vm.notas = notas;
        vm.baseUrl = $rootScope.baseUrl;
        vm.alunos = alunos;


        function notas (id){
            return $http.get(vm.baseUrl + 'notas/' + id + '/p');
        }

        function alunos (){
            return $http.get(vm.baseUrl + 'alunos');
        }
    }


})();