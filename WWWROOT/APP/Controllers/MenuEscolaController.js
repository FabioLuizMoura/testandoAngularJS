(function(){
    'use strict';

    angular.module('app').controller('MenuEscolaController', MenuEscolaController);

    MenuEscolaController.$inject = ['MenuLoginService', 'MenuLogoutService', '$rootScope', '$location'];

    function MenuEscolaController(MenuLoginService, MenuLogoutService, $rootScope, $location){

        var vm = this;
        
        vm.usuario = usuario;
        
        activate();

        function usuario (){
             vm.usuario = {nome:'', senha:'', perfil:''};
        }

        function activate(){

        if(vm.usuario.perfil == null){
            vm.usuario.perfil = localStorage.getItem('perfil');
        }
        
        if(vm.nome == null)
            vm.nome = localStorage.getItem('nome');
            $rootScope.isAuthorize = vm.autenticado = localStorage.getItem('autenticado');
            vm.isProfessor = isProfessor;
        }

        function isProfessor(){
            if(vm.usuario.perfil == 'aluno')
            return false;
            if(vm.usuario.perfil == 'professor')
            return true;
        }

        vm.logar = function(){
            vm.result = MenuLoginService.autenticacao(vm.usuario).then(sucessoLogin);

            function sucessoLogin (response){

                 localStorage.setItem('autenticado', true);
                 vm.autenticado = true;
                 vm.nome = vm.usuario.nome;
                 activate();
                 MenuLoginService.login(vm.usuario).then(sucesso);

                    function sucesso(response){
                        vm.usuario = response.data;
                        if(vm.usuario.perfil == 'aluno')
                            $location.path('/aluno');
                        else if(vm.usuario.perfil == 'professor'){
                            $location.path('/professor');
                            localStorage.setItem('id', vm.usuario.id);
                        }
                    }
            }
        }

        vm.logout = function(){
            usuario();
            MenuLogoutService.logout();
            vm.autenticado = false;
        }

        vm.addAluno = function(){
            $location.path('/adicionarAluno');
        }

        vm.addNota = function(){
            $location.path('/adicionarNota');
        }

    }
})();
