app.directive('liquidChart', function () {
    return {
        restrict: 'AEC',
        templateUrl: 'liquid-chart.html',
        scope: {
            value: '='
        },
        controller: 'liquidChartController'
    }
})
