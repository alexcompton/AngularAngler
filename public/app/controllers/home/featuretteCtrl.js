angular.module('featuretteCtrl', [])
    .controller('featuretteController', function ($scope) {
                  
           var featurettes = $scope.featurettes = [
               {
                   link: '/spots',
                   img: 'assets/img/home/spot.png',
                   bigTitle: 'Fishing Spots',
                   title: ' and Weather',
                   message: "Grab your gear, we're going fishing. Fishing spots, weather, swag, oh my! Well help you find where to go, what you need, and where to buy it! Type in your city we can find you local charters, fishing holes, bait shops, and sporting goods stores. Well also find your local weather and help give you a few suggestions on things to remember for your tackle box!"
               },
               {
                   link: '/fishId',
                   img: 'assets/img/home/floridapagetop.jpg',
                   bigTitle: 'Fishing Research',
                   title: ' for All Your Fishing Needs',
                   message: "Before you go out and fish, shouldn't you know what you want to get? Well look no further! Visit the research page to answer all your Florida fishing questions."
               },
               {
                   link: '/jokes',
                   img: 'assets/img/home/funny-fish.jpg',
                   bigTitle: 'Jokes',
                   title: ' of the Fishing Kind',
                   message: "We have so many jokes! Tiny fish jokes, big fish jokes, jokes that in season, jokes that are out of season, and so many more."
               },
               {
                   link: '/tides',
                   img: 'assets/img/home/tide.jpg',
                   bigTitle: 'Tides...',
                   title: ' Plan for Them',
                   message: "Did you know that fish are active depending on the tides? Some fish like to come out at night, while others like the day. Some like low tides while others high tide. Be prepared! Look up when the fish are out so you don't get stuck catching nothing!"
               },
               {
                   link: '/blog',
                   img: 'assets/img/home/SpeakFish.png',
                   bigTitle: 'Blog',
                   title: ' Post and Catch',
                   message: "Theres plenty of fish in the sea, show all your fishing friends that you got the biggest catch! Share techniques, ask questions, and share spots (except for that secret one)."
               }
           ];
    });