title.onclick = function() {
	
	var elements = document.getElementsByTagName ("a");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if(element.id != title.id){			
			element.classList.toggle ("make_hidden");
		}
		
	}	
	return false;
}

 