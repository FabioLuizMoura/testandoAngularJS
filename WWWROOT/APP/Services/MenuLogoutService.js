(function(){
    'use strict';

    angular.module('app').service('MenuLogoutService', MenuLogoutService);

    MenuLogoutService.$inject = ['$rootScope', '$location'];

    function MenuLogoutService($rootScope, $location){
        var vm = this;

        vm.logout = function(){
            localStorage.removeItem('token');
            localStorage.removeItem('autenticado');
            localStorage.removeItem('perfil');
            localStorage.removeItem('nome');
            localStorage.removeItem('id'); 
            $rootScope.isAuthorize = false;
            $location.path('/');
        }

    }

})();