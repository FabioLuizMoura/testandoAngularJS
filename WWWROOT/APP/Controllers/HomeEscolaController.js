(function(){
    'use strict';

    angular.module('app').controller('HomeEscolaController', HomeEscolaController);

    HomeEscolaController.$inject = ['$rootScope'];

    function HomeEscolaController($rootScope){

        $rootScope.baseUrl = 'http://localhost:13881/api/v1/public/';

        var vm = this;

    }

})();