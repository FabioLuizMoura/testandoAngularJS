(function(){
    'use strict';

    angular.module('app').controller('AlunoEscolaController', AlunoEscolaController);

    AlunoEscolaController.$inject = ['BodyAlunoService'];

    function AlunoEscolaController(BodyAlunoService){

        var vm = this;
        
        vm.id = localStorage.getItem('id');

        materias();
        notas();

        function notas(){
            BodyAlunoService.notas(vm.id).then(successNotas);
            function successNotas(resource){
                vm.notas = resource.data;
            }
        }

        function materias(){
            BodyAlunoService.materias().then(successMaterias);
            function successMaterias(resource){
                vm.materias = resource.data;
            }
        }
        
        vm.materiaNota = function(p,n){
           if(p.id == n.professorID){
                return false;
           }else{
               return true;
           }

        };

        vm.media = function(n){
            return BodyAlunoService.media(n);
        }


    }

})();