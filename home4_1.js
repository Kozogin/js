"use strict"

let show = (array) =>{
	console.log(array);
} 

// 1.---------------------------------
let compareByNumber = (a, b) => {
	return a - b;
}

let pozitiveZeroFunc = (a, b) => {
	return a >= 0 && b >= 0 && true;
	return false;
}

let arrayNumber = [42, -52, 8, -4, 0, 25, 15, 120, 54, -14, 22, 
		-58, 36, 7, 12, -18, 65, -68, -128, -7, 48, 125, -2];
	show('length ' + arrayNumber.length);
	show('unsort   ' + arrayNumber);	
arrayNumber.sort(compareByNumber);
	show('sort   ' + arrayNumber);
arrayNumber.reverse();
	show('reverse    ' + arrayNumber);

let pozitiveZero = arrayNumber.filter(pozitiveZeroFunc);
show('pozitive + zero  :  ' + pozitiveZero);

let negative = arrayNumber.filter(
		function(a, b){		
		return !pozitiveZeroFunc(a, b);
		});
show('negative :  ' + negative);

// 2.------------------------------------
let arrayStudent = [];
let Student = {yearOfStuding : 2, facultyName : 'Automation'};

arrayStudent.push(Student);
arrayStudent.push({yearOfStuding : 2, facultyName : 'Geodesy'});
arrayStudent.push({yearOfStuding : 5, facultyName : 'History'});
arrayStudent.push({yearOfStuding : 4, facultyName : 'Architecture'});
arrayStudent.push({yearOfStuding : 3, facultyName : 'Design'});
arrayStudent.push({yearOfStuding : 3, facultyName : 'Automation'});
arrayStudent.push({yearOfStuding : 2, facultyName : 'History'});
arrayStudent.push({yearOfStuding : 5, facultyName : 'Geodesy'});
arrayStudent.push({yearOfStuding : 5, facultyName : 'Design'});
arrayStudent.push({yearOfStuding : 1, facultyName : 'Geodesy'});

show(arrayStudent);

let arrayFacultyName = arrayStudent.map(o => o.facultyName);
show(arrayFacultyName);

let allYearOfStuding = arrayStudent.reduce(
		(sum, current) => {
			return sum + current.yearOfStuding;
		}, 0);
show('Year ++  ' + allYearOfStuding);

//////
show('Compare Student')
let compareFacultyName = (item1, item2) => {
	if(item1.facultyName > item2.facultyName)
		return 1;
	else if(item1.facultyName < item2.facultyName)
		return -1;
	else {
		if(item1.yearOfStuding > item2.yearOfStuding)
			return 1;
		else if(item1.yearOfStuding < item2.yearOfStuding)
			return -1;
		return 0;
	}
}
	
arrayStudent.sort(compareFacultyName);
show(arrayStudent);
