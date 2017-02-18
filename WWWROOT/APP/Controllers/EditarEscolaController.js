(function(){
    'use strict';

    angular.module('app').controller('EditarEscolaController', EditarEscolaController);

    EditarEscolaController.$inject = ['BodyEditarProfessorService', 'BodyProfessorService', '$location', '$rootScope'];

    function EditarEscolaController(BodyEditarProfessorService, BodyProfessorService, $location, $rootScope){
        var vm = this;

        nota();
        notas();
        alunos();

        function nota (){
            vm.nota = {id: 0, nota1: 0, nota2: 0, nota3: 0, nota4: 0, alunoID: 0, professorID: 0};
        }

        function notas(){
            vm.nota = $rootScope.nota;
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

        vm.salvarNota = function(){
            BodyEditarProfessorService.editarNota(vm.nota).then(successAluno, errorAluno);

             function successAluno(){
                 toastr.success('Notas atulizadas com sucesso', 'Notas atualizadas');
                 nota();
                 $location.path('/professor');
             }

             function errorAluno(resource){
                 toastr.error(resource.data.message, 'Erro ao atualizar nota');
             }
        }

    }

})();