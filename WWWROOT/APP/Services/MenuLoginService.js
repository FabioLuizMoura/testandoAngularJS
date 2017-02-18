(function(){
    'use strict';

    angular.module('app').service('MenuLoginService', MenuLoginService);

    MenuLoginService.$inject = ['$rootScope', '$http'];

    function MenuLoginService($rootScope, $http){

        var vm = this;

        vm.baseUrl = $rootScope.baseUrl;

        vm.autenticacao = autenticacao;

        vm.login = login;

        function autenticacao (usuario){
            var promise;

            login(usuario);

            var dado = "grant_type=password&username=" + usuario.nome + "&passWord=" + usuario.senha;
            promise = $http.post('http://localhost:13881/api/security/token',dado, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
            promise.success(function(data){
                 localStorage.setItem('token', data.access_token);
            $http.defaults.headers.common['Authorization'] = 'Bearer' + data.access_token;
            });

             return promise;

        }

        function login(usuario){
            var logOn;
            
            logOn = $http.get(vm.baseUrl + 'login/'+usuario.nome+'/'+usuario.senha);

            logOn.success(function(data){
            localStorage.setItem('perfil', data.perfil);
            $rootScope.isAuthorize = true;
            localStorage.setItem('nome', usuario.nome);
            localStorage.setItem('id', data.id);
            }).error(function(){
                 toastr.error('usuario / senha incorretos', 'Erro ao buscar usuario');
            });

            return logOn;

        }

    }

})();