(function(){
    'use strict';

    angular.module('app').service('BodyEditarProfessorService', BodyEditarProfessorService);

    BodyEditarProfessorService.$inject = ['$rootScope', '$http'];

    function BodyEditarProfessorService($rootScope, $http){

        var vm = this;

        vm.baseUrl = $rootScope.baseUrl;
        vm.remover = remover;
        vm.editarNota = editarNota;

        function remover(nota){
            return $http.delete(vm.baseUrl + 'deleteNota/' + nota.id);
        }

        function editarNota(nota){
            return  $http.put(vm.baseUrl + 'atualizarNotas', nota);
        }

    }


})();