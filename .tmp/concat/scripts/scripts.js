'use strict';

/**
 * @ngdoc overview
 * @name guess
 * @description
 * # guess
 *
 * Main module of the application.
 */
/*angular
  .module('guess', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }); */

  var app = angular.module('guess', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).controller("MainCtrl",['$scope','$timeout',function($scope,$timeout){
  var words=["Altassian","Remember","Mountain","Pokemon","imdadareeph","neeyor","Apple","superman"];
  $scope.incorrectLettersChosen=[];
  $scope.correctLettersChosen=[];
  var selectedWord='';
  $scope.guesses=6;
  $scope.displayWord='';
  $scope.input = {
    letter: ''
  };
  var selectRandomWord = function() {
    var index = Math.round(Math.random()*words.length);
    return words[index];
  }
  var newGame = function() {
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen=[];
    $scope.guesses=6;
    $scope.displayWord="";
    selectedWord=selectRandomWord();
    var tempDisplayWord='';
    for(var i=0;i<selectedWord.length;i++) {
      tempDisplayWord+='*';
    }
    $scope.displayWord=tempDisplayWord;
    // Random word selection.
  }
  $scope.letterChosen = function() {
    // Check if $scope.input.letter is a single letter and an alphabet and not an already chosen letter.
    // Check if its correct.
    for(var i=0;i<$scope.correctLettersChosen.length;i++) {
      if($scope.correctLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
        $scope.input.letter="";
        return;
      }
    }
    for(var i=0;i<$scope.incorrectLettersChosen.length;i++) {
      if($scope.incorrectLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
        $scope.input.letter="";
        return;
      }
    }
    var correct=false;
    for(var i=0;i<selectedWord.length;i++) {
      if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
        $scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
        correct=true;
      }
    }
    if(correct) {
      $scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
    } else {
      $scope.guesses--;
      $scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
    }
    $scope.input.letter="";
    if($scope.guesses==0) {
      // You Lose
      $timeout(function() {
        newGame();
      },500);
    }
    if($scope.displayWord.indexOf("*")==-1) {
      // Show score
      $timeout(function() {
        newGame();
      },500);
    }
    // add something -- imdad
  }
  newGame();
}]);


function setProgress(elem, percent) {
  var
    degrees = percent * 3.6, /* degrees = percent * 3.6,*/
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
  //elem.querySelector('.counter').setAttribute('data-percent', Math.round(percent));
  elem.querySelector('.progressEnd').style[transform] = 'rotate(' + degrees + 'deg)';
  elem.querySelector('.progress').style[transform] = 'rotate(' + degrees + 'deg)';
  if(degrees!=0){
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
    elem.className += ' fiftyPlus';
}else{
  elem.className = 'circlePercent';
}
  
}

(function() {
  var
    elem = document.querySelector('.circlePercent'),
    percent = 6;
  /*(function animate() {
    setProgress(elem, (percent += .25));
    if(percent < 100)
      setTimeout(animate, 15);
  })();*/
})();

function clickme(){
  elem = document.querySelector('.circlePercent'),
  percent = 6;
  var percentdegree=0;
  var attempts = $(".counter").attr('data-percent');
  var caseNum = parseInt(attempts);
  switch (caseNum) {
    case 0:
        percentdegree = "100";
        break;
    case 1:
        percentdegree = "0";
        break;
    case 2:
        percentdegree = "75";
        break;
    case 3:
        percentdegree = "60";
        break;
    case 4:
        percentdegree = "45";
        break;
    case 5:
        percentdegree = "30";
        break;
    case  6:
        percentdegree = "15";
}
  (function animate() {
    setProgress(elem, (percentdegree)); /* setProgress(elem, (percent += attempts)); */
   // if(percent < 100) setTimeout(animate, 15);
  })();
}

function reset() {
  $('#menu').show();
}
'use strict';

/**
 * @ngdoc function
 * @name guess.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guess
 */
 /*
angular.module('guess')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  

  var app = angular.module("guess",[['$scope','$timeout',]);
app.controller("MainCtrl",['$scope','$timeout',function($scope,$timeout){
	var words=["Altassian","Remember","Mountain","Pokemon","imdadareeph","neeyor","Apple","superman"];
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	var selectedWord='';
	$scope.guesses=6;
	$scope.displayWord='';
	$scope.input = {
		letter: ''
	};
	var selectRandomWord = function() {
		var index = Math.round(Math.random()*words.length);
		return words[index];
	}
	var newGame = function() {
		$scope.incorrectLettersChosen = [];
		$scope.correctLettersChosen=[];
		$scope.guesses=6;
		$scope.displayWord="";
		selectedWord=selectRandomWord();
		var tempDisplayWord='';
		for(var i=0;i<selectedWord.length;i++) {
			tempDisplayWord+='*';
		}
		$scope.displayWord=tempDisplayWord;
		// Random word selection.
	}
	$scope.letterChosen = function() {
		// Check if $scope.input.letter is a single letter and an alphabet and not an already chosen letter.
		// Check if its correct.
		for(var i=0;i<$scope.correctLettersChosen.length;i++) {
			if($scope.correctLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
				$scope.input.letter="";
				return;
			}
		}
		for(var i=0;i<$scope.incorrectLettersChosen.length;i++) {
			if($scope.incorrectLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
				$scope.input.letter="";
				return;
			}
		}
		var correct=false;
		for(var i=0;i<selectedWord.length;i++) {
			if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
				$scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
				correct=true;
			}
		}
		if(correct) {
			$scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
		} else {
			$scope.guesses--;
			$scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
		}
		$scope.input.letter="";
		if($scope.guesses==0) {
			// You Lose
			$timeout(function() {
				newGame();
			},500);
		}
		if($scope.displayWord.indexOf("*")==-1) {
			// Show score
			$timeout(function() {
				newGame();
			},500);
		}
		// add something -- imdad
	}
	newGame();
}]);

'use strict';

/**
 * @ngdoc function
 * @name guess.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guess
 */
angular.module('guess')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('guess').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/index%202.html',
    "<!DOCTYPE html><!DOCTYPE html> <html> <head> <title>Imdads Guess</title> <link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <script src=\"node_modules/angular/angular.js\"></script> <script src=\"app.js\"></script> <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"> <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script> <script src=\"https://code.jquery.com/jquery-1.11.1.min.js\"></script> <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\"> <link href=\"style.css\" rel=\"stylesheet\"> <link href=\"menu.css\" rel=\"stylesheet\"> <link href=\"https://fonts.googleapis.com/css?family=Rubik\" rel=\"stylesheet\"> </head> <body ng-app=\"GuessApp\" ng-controller=\"GameController\" class=\"bgfull\"> <!--TOP-NAVBAR-END--> <nav class=\"top-bar\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-4 hidden-xs\"> <span class=\"nav-text\"> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> imdadareeph@gmail.com </span> </div> <div class=\"col-sm-4 text-center\"> <a href=\"https://www.facebook.com/imdadareeph\" class=\"social\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a> <a href=\"https://twitter.com/imdadareeph\" class=\"social\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a> <a href=\"https://github.com/imdadareeph\" class=\"social\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a> <a href=\"https://stackoverflow.com/users/985640/imdad-areeph\" class=\"social\"><i class=\"fa fa-stack-overflow\" aria-hidden=\"true\"></i></a> <a href=\"#\" class=\"social\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i></a> </div> <div class=\"col-sm-4 text-right hidden-xs\"> <ul class=\"tools\"> <li class=\"dropdown\"> <a class=\"\" href=\"/\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Imdad Areeph</a> </li> </ul> </div> </div> </div> </nav> <!--====================== NAVBAR MENU START===================--> <nav class=\"navbar navbar-inverse\"> <div class=\"container\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> </div> <div class=\"collapse navbar-collapse\" id=\"myNavbar\"> <ul class=\"nav navbar-nav navbar-left\"> <li class=\"\"><a href=\"index.html\">Home</a></li> <li><a href=\"index1.html\">App 2</a></li> <li><a href=\"index2.html\">App 3</a></li> <li><a href=\"index3.html\">App 4</a></li> </ul> </div> </div> </nav> <!--NAVBAR-END--> <div class=\"container\"> <div> <div class=\"col-md-12 text-center title-name\"><h1>Guess the name</h1></div> </div> <div class=\"padd-btm col-md-12\"> <div class=\"circlePercent circleright\"> <div class=\"counter\" data-percent=\"{{guesses}}\"></div> <div class=\"progress\"></div> <div class=\"progressEnd\"></div> </div> </div> <div class=\"col-md-12\"> <div class=\"text-center h1\">{{displayWord}}</div> <div> <input type=\"text\" class=\"form-control input-lg\" name=\"guess\" ng-model=\"input.letter\" ng-minlength=\"1\" ng-maxlength=\"1\" ng-pattern=\"/^[A-Za-z]+$/\"> <div class=\"radio\"> <button ng-click=\"letterChosen()\" onclick=\"clickme()\" class=\"btn btn-warning btn-lg btn-group-justified\"> SUBMIT </button> </div> </div> </div> <div class=\"col-md-12\"> <div class=\"breadcrumb btn-block col-md-3 fa fa-thumbs-up thumbsup-style\"> <span ng-repeat=\"letter in correctLettersChosen\">{{letter}}</span> </div> <div class=\"breadcrumb btn-block col-md-3 fa fa-thumbs-down thumbsdown-style\"> <span ng-repeat=\"letter in incorrectLettersChosen\">{{letter}}</span> </div> </div> </div> <script src=\"appprogressbar.js\"></script> <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script> <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script> </body> </html>"
  );


  $templateCache.put('views/main.html',
    "<div> <div class=\"col-md-12 text-center title-name\"><h1>Guess the name</h1></div> </div> <div class=\"padd-btm col-md-12\"> <div class=\"circlePercent circleright\"> <div class=\"counter\" data-percent=\"{{guesses}}\"></div> <div class=\"progress\"></div> <div class=\"progressEnd\"></div> </div> </div> <div class=\"col-md-12\"> <div class=\"text-center h1 pt-5\">{{displayWord}}</div> <div> <input type=\"text\" placeholder=\"Enter Single Alphabet\" class=\"form-control input-lg\" name=\"guess\" ng-model=\"input.letter\" ng-minlength=\"1\" ng-maxlength=\"1\" ng-pattern=\"^\\w{1}$\"> <div class=\"col-form-label col-form-label-lg\"> <button ng-click=\"letterChosen()\" onclick=\"clickme()\" class=\"btn btn-block btn-info\"> SUBMIT </button> </div> </div> </div> <div class=\"col-md-12\"> <div class=\"breadcrumb btn-block fa fa-thumbs-up thumbsup-style\"> <span ng-repeat=\"letter in correctLettersChosen\">{{letter}}</span> </div> <div class=\"breadcrumb btn-block fa fa-thumbs-down thumbsdown-style\"> <span ng-repeat=\"letter in incorrectLettersChosen\">{{letter}}</span> </div> </div>  <br><br><br><br><br><br>"
  );

}]);
