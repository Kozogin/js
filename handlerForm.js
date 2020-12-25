age.oninput = function() {
	if(isNaN(age.value)){
		age.classList.remove('validationOK');
		age.classList.add('errNow');
	} else{
		if(age.value > 0 && age.value < 101){
			age.classList.remove('errNow');
			age.classList.add('validationOK');
			
			setTimeout(function() {
				age.classList.remove('validationOK');
			}, 800);
			
		} else{
			age.classList.remove('validationOK');
			age.classList.add('errNow');
		}
	}
}

age.onclick = function() {
	age.value = "";
	age.classList.remove('errNow');
}

function sendDataByGetMethod() {
	
	var obj = readForm();
		
	if(valideFieldForm(obj) && valideAge(obj)){
		
		obj.fName += "---.ValidatedByGET---";
		obj.lName += "---.ValidatedByGET---";
		obj.age += "---.ValidatedByGET---";
		obj.address += "---.ValidatedByGET---";
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "/formGet?lName=" + obj.lName + "&fName=" + obj.fName + 
				"&age=" + obj.age +	"&address=" + obj.address);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send();	
	}	
}

function sendDataByPostMethod() {
	var obj = readForm();	
	
	if(valideFieldForm(obj) && valideAge(obj)){
		
		obj.fName += "---.ValidatedByPOST---";
		obj.lName += "---.ValidatedByPOST---";
		obj.age += "---.ValidatedByPOST---";
		obj.address += "---.ValidatedByPOST---";
		
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/formPost");
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify(obj));	
	}
}	

function readForm() {
	var obj = {		
			fName:document.getElementById("firstName").value,
			lName:document.getElementById("lastName").value,
			age:document.getElementById("age").value,
			address:document.getElementById("address").value
	};
	return obj;
}

function valideFieldForm(obj) {
	for (var i = 0; i < user.elements.length; i++) {
		var elemUser = user.elements[i];
		if(elemUser.type == "text"){			
			elemUser.classList.remove('errNow');
		}			
	}
	
	var valideField = true;
	for (var i = 0; i < user.elements.length; i++) {
		var elemUser = user.elements[i];
		if(elemUser.type == "text" && elemUser.value == ""){			
			elemUser.classList.add('errNow');
			valideField = false;
		}			
	}
	return valideField;
}

function valideAge(obj) {
	var valideFieldaGE = true;
	if(!(obj.age > 0 && obj.age < 100)){
		valideFieldaGE = false;
		age.value ="Помилка. Введіть коректні дані";
		age.classList.add('errNow');
	}
	return valideFieldaGE;
}

