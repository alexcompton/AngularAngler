angular.module('jumboCtrl', [])

    // handle all the js for the jumbotron
    .controller('jumboController', function ($scope) {
               
        $scope.interval = 3000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [
            {
                image: 'assets/img/home/slide1.png',
                header: 'What Kind of Fish is This?',
                text: 'Take a Look at our Indetification Page.',
                id: 0
            },
            {
                image: 'assets/img/home/slide2.jpg',
                header: 'Looking for a New Watering Hole?',
                text: 'Check Out the Spots Page...',
                id: 1
            },
            {
                image: 'assets/img/home/slide3.jpg',
                header: 'Brag About Your Catch',
                text: 'Visit Our Blog!',
                id: 2
            }
        ];
    });