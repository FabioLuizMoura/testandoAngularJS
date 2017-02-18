(function(){
    'use strict';

    angular.module('app').controller('AdicionarEscolaController', AdicionarEscolaController);

    AdicionarEscolaController.$inject = ['BodyAddAlunoService', 'BodyAddNotaService', 'BodyProfessorService'];

    function AdicionarEscolaController(BodyAddAlunoService, BodyAddNotaService, BodyProfessorService){

        var vm = this;

        vm.id = localStorage.getItem('id');

        AtualizarAluno();
        atualizarNota();
        pegarAlunos();

        function atualizarNota(){
            vm.nota = {id: 0, nota1: 0, nota2: 0, nota3: 0, nota4: 0, alunoID: 0, professorID: vm.id};
        }

        function AtualizarAluno(){
            vm.aluno = {nome: '', ra: '', perfil: 'aluno'};
        }

        vm.salvarAluno = function(aluno){
            BodyAddAlunoService.addAluno(aluno).then(successAluno, errorAluno);

            function successAluno(){
                toastr.success('Aluno(a) '+ aluno.nome + ' adicionado com sucesso', 'Aluno adicionado');
                AtualizarAluno();
            }

            function errorAluno(resource){
                toastr.error(resource.data.message, 'Erro ao adicionar aluno');
            }
        }

        function pegarAlunos(){
            BodyProfessorService.alunos().then(successAlunos, errorAlunos);

            function successAlunos(resource){
                vm.alunos = resource.data;
            }

            function errorAlunos(resource){
                toastr.error(resource.data.message, 'Erro ao buscar alunos');
            }

        }

        vm.salvarNota = function(nota){
            BodyAddNotaService.addNota(nota).then(successNota, errorNota);

            function successNota(){
                toastr.success('Notas salvas com sucesso', 'Notas salvas');
                atualizarNota();
            }

            function errorNota(resource){
                toastr.error(resource.data, 'Erro ao salvar notas');
            }
        }
        

    }
    
})();