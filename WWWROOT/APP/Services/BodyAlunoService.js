(function(){
    'use strict';

    angular.module('app').service('BodyAlunoService', BodyAlunoService);

    BodyAlunoService.$inject = ['$http', '$rootScope'];

    function BodyAlunoService($http, $rootScope){
        var vm = this;
        vm.notas = notas;
        vm.baseUrl = $rootScope.baseUrl;
        vm.materias = professores;
        vm.media = media;

        function media(n){
            var med = (n.nota1 + n.nota2 + n.nota3 + n.nota4) / 4;
            return med;
        }

        function notas(id){
            return $http.get(vm.baseUrl+'notas/' + id +'/a');
        }

        function professores(){
            return $http.get(vm.baseUrl + 'professores');
        }


    }

})();