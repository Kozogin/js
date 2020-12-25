"use strict"

// 1.min
let admin1;
let name;
name = 'John';
admin1 = name;
console.log(admin1);

// 2.min
console.log('\n  min 2 ');
let admin;
let password;

	admin = 'admin';
	password = 'themaster';

	//admin = 'adminwrong';
	//password = 'passwordwrong';
	
	//admin = 'cancel';
	//password = 'cancel';

if(admin == 'admin'){
	
	if(password == 'themaster'){
		console.log('Welcome');
	} else if (password = 'cancel'){
		console.log('Canceled');		
	} else {
		console.log('wrong password');
	}
	
} else if(admin = 'cancel'){
	console.log('Canceled');
} else {
	console.log('I don`t know you');
}

// max
console.log('\n Max ');
switch(admin){
	case 'admin':
		
		switch(password){
			case 'themaster':
				console.log('Welcome');
			break;
			case 'cancel':
				console.log('Canceled');
			break;
			default:
				console.log('wrong password');
			break;
		}
		
		break;
	case 'cancel':
			console.log('Canceled');
		break;
	default:
			console.log('I don`t know you');
		break;
		
}
