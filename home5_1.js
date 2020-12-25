"use strict" 
function makeBuffer() {
	var index = 0;
	var arrayBuffer = {};

	return {
		add: function(value){			
			arrayBuffer[index] = value + "";
			index++;
		},
		print: function(){
			var allBuffer = '';
			for (var i = 0; i < index; i++) {
				allBuffer = allBuffer + arrayBuffer[i] + ' ';
			}
			return allBuffer;
		},
		clear: function(){
			arrayBuffer = new Array('');
			index = 0;			
		}
	}
}



var buffer = makeBuffer();

buffer.add(0);
buffer.add(1);
buffer.add(0); 

buffer.add( 'JavaScript');
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');

console.log(buffer.print()); 

buffer.clear();
console.log(buffer.print()); 

buffer.add("Тест");
buffer.add("тебе не з'їсть");
console.log(buffer.print()); // Тест тебе не з'їсть
buffer.clear ();
console.log(buffer.print()); // "" 
