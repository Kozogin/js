"use strict";
console.log('---------prototype inherit-----------');

function inherit(Child, Parent)
{
    var F = function () {};
    F.prototype = Parent.prototype;

    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
}

function Robot(explain) { this.explain = explain }
Robot.prototype.work = function () {
	console.log(this.explain || 'I am Robot I simple work') 
	};

function CoffeRobot() { 
	var explain = 'I am CoffeRobot I make coffee';
	Robot.call(this, explain);
	}
inherit(CoffeRobot, Robot);

function RobotDancer() { 
	var explain = 'I am RobotDancer I simple dance';
	Robot.call(this, explain);
	}
inherit(RobotDancer, Robot);

function RobotCoocker() { 
	var explain = 'I am RobotCoocker I simple cook';
	Robot.call(this, explain);
	}
inherit(RobotCoocker, Robot);

var android = new Robot();
var coffe = new CoffeRobot();
var dance = new RobotDancer();
var cook = new RobotCoocker();

android.work();
coffe.work();
dance.work();
cook.work();

console.log('---------array-----------');
var arrayRobot = [android, coffe, dance, cook];
for (var i = 0; i < arrayRobot.length; i++) {
	arrayRobot[i].work();
}
