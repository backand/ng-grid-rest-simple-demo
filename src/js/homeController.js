'use strict';

angular.module('angularGruntSeed')

.controller('HomeController', ['$scope', 'GridService',
    function($scope, gridService) {

        gridService.getContributors().then(function(data) {
            $scope.myData = data;
        });

        $scope.gridOptions = {
            data: 'myData',
            // Column definition example
            columnDefs: [{field:'id', cellTemplate: '<div ng-class="{green: row.getProperty(col.field) > 1}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},{field:'firstname', displayName:'First Name'}, {field:'lastname', displayName:'Last Name'},{field:'company'},{field:'project'}],
            rowTemplate:'<div style="height: 100%" ng-class="{green: row.getProperty(\'id\') > 2 }"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                           '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                           '<div ng-cell></div>' +
                     '</div></div>'
        };
    }
]);
