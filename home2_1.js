"use strict"
// 1.
var user = {};
	console.log(user);
user.name = 'PILIP';
	console.log(user);
user['surname'] = 'SHEVCHENKO';
	console.log(user);
user.name = 'SERGIY';
	console.log(user);
delete user.name;
	console.log(user);
	console.log();	
	
// 2.
	var id = 0;
var employeeSalaries = {};
employeeSalaries['salaries' + id++] = 15000;
employeeSalaries['salaries' + id++] = 25000;
employeeSalaries['salaries' + id++] = 18000;
console.log(employeeSalaries);

//var sumSalary = 0;
//for ( var salary in employeeSalaries) {
//	console.log(salary + ' = ' +employeeSalaries[salary]);
//	sumSalary += employeeSalaries[salary];
//}

function sum() {
	var sumSalary = 0;
	for ( var salary in employeeSalaries) {
		sumSalary += employeeSalaries[salary];
	}
	return sumSalary
}
console.log('Sum salary = ' + sum());
console.log();

// 3.
function operate(a, b, sign){
	try {
		if (a == "" || b == ""){
			throw new Error('operandes is empty');
		}
		if(!(a - b)){
			throw new Error('operandes');
		}
		a -= 0;
		b -= 0;
		switch (sign) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		case '/':
			return a / b;
			break;
		default:
			throw new Error('action');
			break;
		}

	} catch (e) {
		console.log('wrong input ' + e);
	}
}

console.log(operate('15', '4', '-'));

	