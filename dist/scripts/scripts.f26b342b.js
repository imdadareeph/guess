"use strict";function setProgress(a,b){var c=3.6*b,d=/MSIE 9/.test(navigator.userAgent)?"msTransform":"transform";a.querySelector(".progressEnd").style[d]="rotate("+c+"deg)",a.querySelector(".progress").style[d]="rotate("+c+"deg)",0!=c?b>=50&&!/(^|\s)fiftyPlus(\s|$)/.test(a.className)&&(a.className+=" fiftyPlus"):a.className="circlePercent"}function clickme(){elem=document.querySelector(".circlePercent"),percent=6;var a=0,b=$(".counter").attr("data-percent"),c=parseInt(b);switch(c){case 0:a="100";break;case 1:a="0";break;case 2:a="75";break;case 3:a="60";break;case 4:a="45";break;case 5:a="30";break;case 6:a="15"}!function(){setProgress(elem,a)}()}function reset(){$("#menu").show()}var app=angular.module("guess",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]).controller("MainCtrl",["$scope","$timeout",function(a,b){var c=["Altassian","Remember","Mountain","Pokemon","imdadareeph","neeyor","Apple","superman"];a.incorrectLettersChosen=[],a.correctLettersChosen=[];var d="";a.guesses=6,a.displayWord="",a.input={letter:""};var e=function(){var a=Math.round(Math.random()*c.length);return c[a]},f=function(){a.incorrectLettersChosen=[],a.correctLettersChosen=[],a.guesses=6,a.displayWord="",d=e();for(var b="",c=0;c<d.length;c++)b+="*";a.displayWord=b};a.letterChosen=function(){for(var c=0;c<a.correctLettersChosen.length;c++)if(a.correctLettersChosen[c].toUpperCase()==a.input.letter.toUpperCase())return void(a.input.letter="");for(var c=0;c<a.incorrectLettersChosen.length;c++)if(a.incorrectLettersChosen[c].toUpperCase()==a.input.letter.toUpperCase())return void(a.input.letter="");for(var e=!1,c=0;c<d.length;c++)d[c].toLowerCase()==a.input.letter.toLowerCase()&&(a.displayWord=a.displayWord.slice(0,c)+a.input.letter.toUpperCase()+a.displayWord.slice(c+1),e=!0);e?a.correctLettersChosen.push(a.input.letter.toUpperCase()):(a.guesses--,a.incorrectLettersChosen.push(a.input.letter.toUpperCase())),a.input.letter="",0==a.guesses&&b(function(){f()},500),-1==a.displayWord.indexOf("*")&&b(function(){f()},500)},f()}]);!function(){document.querySelector(".circlePercent")}(),angular.module("guess").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("guess").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/index%202.html",'<!DOCTYPE html><!DOCTYPE html> <html> <head> <title>Imdads Guess</title> <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> <meta name="viewport" content="width=device-width,initial-scale=1"> <script src="node_modules/angular/angular.js"></script> <script src="app.js"></script> <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script> <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script> <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"> <link href="style.css" rel="stylesheet"> <link href="menu.css" rel="stylesheet"> <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"> </head> <body ng-app="GuessApp" ng-controller="GameController" class="bgfull"> <!--TOP-NAVBAR-END--> <nav class="top-bar"> <div class="container"> <div class="row"> <div class="col-sm-4 hidden-xs"> <span class="nav-text"> <i class="fa fa-envelope" aria-hidden="true"></i> imdadareeph@gmail.com </span> </div> <div class="col-sm-4 text-center"> <a href="https://www.facebook.com/imdadareeph" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></a> <a href="https://twitter.com/imdadareeph" class="social"><i class="fa fa-twitter" aria-hidden="true"></i></a> <a href="https://github.com/imdadareeph" class="social"><i class="fa fa-github" aria-hidden="true"></i></a> <a href="https://stackoverflow.com/users/985640/imdad-areeph" class="social"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a> <a href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></a> </div> <div class="col-sm-4 text-right hidden-xs"> <ul class="tools"> <li class="dropdown"> <a class="" href="/"><i class="fa fa-user" aria-hidden="true"></i> Imdad Areeph</a> </li> </ul> </div> </div> </div> </nav> <!--====================== NAVBAR MENU START===================--> <nav class="navbar navbar-inverse"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="collapse navbar-collapse" id="myNavbar"> <ul class="nav navbar-nav navbar-left"> <li class=""><a href="index.html">Home</a></li> <li><a href="index1.html">App 2</a></li> <li><a href="index2.html">App 3</a></li> <li><a href="index3.html">App 4</a></li> </ul> </div> </div> </nav> <!--NAVBAR-END--> <div class="container"> <div> <div class="col-md-12 text-center title-name"><h1>Guess the name</h1></div> </div> <div class="padd-btm col-md-12"> <div class="circlePercent circleright"> <div class="counter" data-percent="{{guesses}}"></div> <div class="progress"></div> <div class="progressEnd"></div> </div> </div> <div class="col-md-12"> <div class="text-center h1">{{displayWord}}</div> <div> <input type="text" class="form-control input-lg" name="guess" ng-model="input.letter" ng-minlength="1" ng-maxlength="1" ng-pattern="/^[A-Za-z]+$/"> <div class="radio"> <button ng-click="letterChosen()" onclick="clickme()" class="btn btn-warning btn-lg btn-group-justified"> SUBMIT </button> </div> </div> </div> <div class="col-md-12"> <div class="breadcrumb btn-block col-md-3 fa fa-thumbs-up thumbsup-style"> <span ng-repeat="letter in correctLettersChosen">{{letter}}</span> </div> <div class="breadcrumb btn-block col-md-3 fa fa-thumbs-down thumbsdown-style"> <span ng-repeat="letter in incorrectLettersChosen">{{letter}}</span> </div> </div> </div> <script src="appprogressbar.js"></script> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> </body> </html>'),a.put("views/main.html",'<div> <div class="col-md-12 text-center title-name"><h1>Guess the name</h1></div> </div> <div class="padd-btm col-md-12"> <div class="circlePercent circleright"> <div class="counter" data-percent="{{guesses}}"></div> <div class="progress"></div> <div class="progressEnd"></div> </div> </div> <div class="col-md-12"> <div class="text-center h1 pt-5">{{displayWord}}</div> <div> <input type="text" placeholder="Enter Single Alphabet" class="form-control input-lg" name="guess" ng-model="input.letter" ng-minlength="1" ng-maxlength="1" ng-pattern="^\\w{1}$"> <div class="col-form-label col-form-label-lg"> <button ng-click="letterChosen()" onclick="clickme()" class="btn btn-block btn-info"> SUBMIT </button> </div> </div> </div> <div class="col-md-12"> <div class="breadcrumb btn-block fa fa-thumbs-up thumbsup-style"> <span ng-repeat="letter in correctLettersChosen">{{letter}}</span> </div> <div class="breadcrumb btn-block fa fa-thumbs-down thumbsdown-style"> <span ng-repeat="letter in incorrectLettersChosen">{{letter}}</span> </div> </div>  <br><br><br><br><br><br>')}]);