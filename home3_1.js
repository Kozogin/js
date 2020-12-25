"use strict"
let show = (array) =>{
	console.log(array);
} 

// 1.
let products = ['eggs', 'milk', 'bread', 'butter', 'buckwheat'];
	show(products[products.length -1]);	
	let last =products.pop();
	show(last);
		products.push(last);
	show(products.splice(-1, 1)[0]);
	show("-----------");
	
// 2.

let find = (arr, value) => {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value){
			return i;
		}
	}
	return -1;
}
	
let styles = ['jazz', 'blues'];
	styles.push('rock and roll');
show(styles);
styles.splice(-2, 1, 'classic');
show(styles);
show(styles.shift());
show(styles);
styles.unshift('rep', 'reggae')
show(styles);

show(find(styles, 'reggae'));
show("-----------");

// max 3 - 1

let filterRange = (array, a, b) => {
	let decision = [];	
	if (a > b){
		let tempChange = a;
		a = b;
		b = tempChange;
	}	
	for (var i = 0; i < array.length; i++) {
		if(array[i] >= a && array[i] <= b){
			decision.push(array[i]);
		}
	}
	return decision;
}

let someArray = [85, 34, 0, -8, 32, 54, 35, 19, 4, 75, -14, 28, 357];
show(filterRange(someArray, 75, 19));
show("-----------");

// 3 - 2
let camelize = (str) => {
	let raw = str.split('-');
		for (var i = 1; i < raw.length; i++) {
			let firstLetter = (raw[i].charAt(0)).toUpperCase();
			let restWord = raw[i].slice(1);
			raw.splice(i, 1, (firstLetter + restWord));
		}	
	return raw.join('');
}
show(camelize("my-short-string-today"));

