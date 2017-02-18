(function(){
    'use strick';

        angular.module('app').run(config);
        
        config.$inject = ['$rootScope', '$location'];
        
        function config($rootScope, $location){

        $rootScope.$on("$routeChangeStart", function(event, next, current){
            if(next.authorize && !$rootScope.isAuthorize){
                $location.path('/');
            }
        });

    };

})();