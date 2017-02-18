(function(){
    'use strict';

    angular.module('app').controller('ProfessorEscolaController', ProfessorEscolaController);

    ProfessorEscolaController.$inject = ['BodyProfessorService', '$location', 'BodyEditarProfessorService', '$rootScope'];

    function ProfessorEscolaController(BodyProfessorService, $location, BodyEditarProfessorService, $rootScope){

        var vm = this;
        
        vm.id = localStorage.getItem('id');
        vm.editar = editar;


        notas(vm.id);
        alunos();

        
        function editar(nota){
            $rootScope.nota = nota;
             $location.path('/editarNota');
        }

        function notas (id){
            BodyProfessorService.notas(id).then(successNotas, errorNotas);

            function successNotas(resource){
                vm.notas = resource.data;
            }

            function errorNotas(resource){
                toastr.error(resource.data.message, 'Erro ao buscar notas');
            }

        }

        function alunos(){
            BodyProfessorService.alunos().then(successAlunos, errorAlunos);

            function successAlunos (resource){
                vm.alunos = resource.data;
            }

            function errorAlunos (resource){
                toastr.error(resource.data.message, 'Erro ao buscar alunos');
            }

        }


        vm.alunoNota = function(al,n){
           if(al.id == n.alunoID){
                return al.nome;
           }else{
               return;
           }
        }

        vm.remover = function(nota){
            BodyEditarProfessorService.remover(nota).then(successNota, errorNota);

            function successNota(){
                toastr.success('Nota removida com sucesso', 'Nota removida');
                var index = vm.notas.indexOf(nota);
                vm.notas.splice(index, 1);     
            }

            function errorNota(resource){
                toastr.error(resource.data.message, 'Erro ao apagar nota');
            }

        }

       vm.esconder = function(valor){
            if(valor == null){
                return true;
            }else{
                return false;
            }
        }


    }

})();