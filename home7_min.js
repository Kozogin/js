function toFill() {
	var arrForFill = ['Поняття DOM', 'Поняття BOM', 'SelectorId', 
		'SelectorTagName', 'Custom Attribute', 'else'];
	var elements = document.querySelectorAll('ul > li');
	var count;
	for (var i = 0; i < elements.length; i++) {
		var item = elements[i];
		item.innerHTML = arrForFill[i];
		count = i + 1;
	}
	
	var paragraf = document.querySelector('p');
	paragraf.innerHTML = 'Загальна кількість елементів списку: ' + count;	
}