
app.controller('liquidChartController', controller);

function controller($scope) {
    $scope.offset = 50;
    $scope.style = {
        top: calculateTop() + '%',
        marginTop: (calculateTop() * -1) + '%',
        background: $scope.value > 40 ? "#e0cd21" : "#A31341"
    };
    $scope.value = $scope.value;

    function calculateTop() {
        return $scope.value === 100 ? -60 : $scope.offset - $scope.value;
    }
}
