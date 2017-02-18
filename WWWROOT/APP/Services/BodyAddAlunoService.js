(function(){
    'use strict';

    angular.module('app').service('BodyAddAlunoService', BodyAddAlunoService);

    BodyAddAlunoService.$inject = ['$rootScope', '$http'];

    function BodyAddAlunoService($rootScope, $http){
        var vm = this;
        vm.baseUrl = $rootScope.baseUrl;
        vm.addAluno = addAluno;

        function addAluno(aluno){
            return $http.post(vm.baseUrl + 'criarAluno', aluno);
        }

    }


})();