angular.module('rpgmapapp', ['routerRoutes'])

    .controller('mainController', function () {
        var vm = this;
    })
    
    .controller('homeController', function () {
        var vm = this;
        vm.message = "home page";
    }) 
    
    .controller('aboutController', function () {
        var vm = this;
        vm.message = "RPG Map App is created for virtual tabletop combat.";
    })

    .controller('boardController', function () {
        var vm = this;
        vm.boardName = "The Board Name";
    })