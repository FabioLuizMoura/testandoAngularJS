(function(){
    'use strict';

    angular.module('app').service('BodyAddNotaService', BodyAddNotaService);

    BodyAddNotaService.$inject = ['$http', '$rootScope'];

    function BodyAddNotaService($http, $rootScope){

        var vm = this;

        vm.baseUrl = $rootScope.baseUrl;
        vm.addNota = addNota;

        function addNota (nota){
            return $http.post(vm.baseUrl + 'adicionarNota', nota);
        }

    }

})();