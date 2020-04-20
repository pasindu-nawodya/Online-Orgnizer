
app.controller('MainCtrl',($scope,$log)=>{

    $scope.calDate=new Date();
    $scope.formatedDate=moment($scope.calDate).format('LL');

    $scope.events = [];
    $scope.eventsInfo = [];
    const Now  =  new Date();

    $scope.addNewEvent = function () {
        $scope.events.push($scope.formatedDate);
        $scope.eventsInfo.push($scope.eventInfo);
    }

    $scope.removeAll = function () {
        $scope.events=[];
        $scope.eventsInfo=[];
    }

    $scope.removeEvent = function(x) {
        const index = $scope.events.indexOf(x);
        $scope.events.splice(index,1);
        $scope.eventsInfo.splice(index,1);
    }

    $scope.changedDate=function(){/*Calendar change function */
        if($scope.calDate){
            $scope.formatedDate=moment($scope.calDate).format('LL');
            console.log($scope.formatedDate);
        }
        $log.log('Date changed to: ' + $scope.calDate);
    };

    /*Calendar - https://material.angularjs.org/latest/demo/datepicker#basic-usage*/
});