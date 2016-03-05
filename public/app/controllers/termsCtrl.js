angular.module('termsCtrl', [])
    .controller('termsController', function ($scope) {
                  
           var terms = $scope.terms = {
                   bigHeading: 'Terms and Conditions',
                   smallHeading: 'Use of this website implies the following agreement with Florida Fishing Inc.',
                   img: 'assets/img/terms.jpg',
                   message: "Warning: Florida Fishing Inc. is not responsible for you not having what it takes to catch mega fish like the one in the picture. Florida Fishing Inc. is not responsible for what happens if you go out in dangerous water or weather. We just try to help you get the right lure for the job."
               };
    });