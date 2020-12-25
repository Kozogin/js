"use strict"
console.log('---------functional inherit-----------');

 function Robot(explain){
	this.explain = explain;	
	
	this.work = function(value){
		console.log(this.explain || 'I am Robot I simple work')
	}	
}

function CoffeRobot(){
	var explain = 'I am CoffeRobot I make coffee';
	Robot.call(this, explain);	
}

function RobotDancer(){
	var explain = 'I am RobotDancer I simple dance';
	Robot.call(this, explain);	
}

function RobotCoocker(){
	var explain = 'I am RobotCoocker I simple cook';
	Robot.call(this, explain);	
}

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


