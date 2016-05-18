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
        vm.message = "RPG Map App virtual tabletop combat.";
    })

    .controller('boardController', function () {
        var vm = this;
        vm.boardName = "The Board Name";
        
         vm.RowCount = {};
         vm.ColCount = {};
        
        vm.boardArray = [{
                'tiles': [{
                    'color': 'green',
                }]
        }];
        
        vm.CreateBoardArray = function () {
            vm.boardArray = [];
            
            for (var rowIndex = 0; rowIndex < vm.RowCount.value; rowIndex++) {
                var row = [];
                for (var colIndex = 0; colIndex < vm.ColCount.value; colIndex++) {
                    
                    row.push({
                        'color' : 'blue' + rowIndex + colIndex,
                    })
                }
                vm.boardArray.push({'tiles' : row});
            }
        }
    })