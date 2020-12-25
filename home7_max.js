function backgraundRed(){
	var elements = document.querySelectorAll('ul > li > a');	
	for (var i = 0; i < elements.length; i++) {
		var item = elements[i];		
	
	(item.href.indexOf('http://') != -1 || item.href.indexOf('ftp://') != -1)
		&& (item.className = "external-red");			
	}
}

function invertion(){
	var elements = document.querySelectorAll('ul > li > a');	
	for (var i = 0; i < elements.length; i++) {
		var item = elements[i];
		item.classList.toggle ("external-red");
	}
}