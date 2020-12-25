$(document).ready(function() {
	
	$('#age').bind('input', function() {
		
		if(isNaN($('#age').prop('value'))){
			$('#age').removeClass("validationOK");
			$('#age').addClass("errNow");
		} else {
			 if($('#age').prop('value') > 0 && $('#age').prop('value') < 101){
				 $('#age').removeClass("errNow");
				 $('#age').addClass("validationOK");
				 
				 setTimeout(function() {
					 $('#age').removeClass("validationOK");
					}, 800);
			 } else {
				 $('#age').removeClass("validationOK");
				 $('#age').addClass("errNow");
			 }
		}
		
	});	
	

			$('#age').bind('click', function() {
				$('#age').prop('value', '');				
					$('#age').removeClass("errNow");				
			});
			
			
			$('#get').bind('click', function() {

						var $obg = readForm();
						if (valideFieldForm($obg) && valideAge($obg)) {

							$obg.userName += "---.ValidatedByGET---";
							$obg.userAge += "---.ValidatedByGET---";
							$obg.userAddress += "---.ValidatedByGET---";

							$.ajax({
								type : 'GET',
								contentType : 'application/json',
								url : '/userGet?userName=' + $obg.userName
										+ '&userAge=' + $obg.userAge
										+ '&userAddress=' + $obg.userAddress,
								ssuccess : function(data) {
									console.log('ssuccess');
									console.log('JSON.stringify(data)')
								}
							});
						}
					});
			

			$('#post').bind('click', function() {

				var $obg = readForm();
				if (valideFieldForm($obg) && valideAge($obg)) {

					$obg.userName += "---.ValidatedByPOST---";
					$obg.userAge += "---.ValidatedByPOST---";
					$obg.userAddress += "---.ValidatedByPOST---";

					$.ajax({
						type : 'POST',
						data : JSON.stringify($obg),
						contentType : 'application/json',
						url : '/userPOST',
						ssuccess : function(data) {
							console.log('ssuccess');
							console.log('JSON.stringify(data)')
						}
					});
				}
			});	
			
			
			function readForm() {				
				var $obg = {
					userName : $("#lastName").prop('value'),
					userAge : $("#age").prop('value'),
					userAddress : $("#address").prop('value')
				};
				return $obg;
			}
			
			function valideFieldForm($obg) {				

				for (var i = 0; i < $('#user').prop('elements').length; i++) {
					var $elemUser = $('#user').prop('elements')[i];
					if ($($elemUser).prop('type') == "text") {
						$($elemUser).removeClass("errNow");
					}
				}

				var $valideField = true;
				for (var i = 0; i < $('#user').prop('elements').length; i++) {
					var $elemUser = $('#user').prop('elements')[i];

					if ($($elemUser).prop('type') == "text"
							&& $($elemUser).prop('value') == "") {
						$($elemUser).addClass("errNow");
						$valideField = false;
					}
				}
				return $valideField;
			}

			function valideAge($obg) {
				var $valideFieldaGE = true;
				if (!($obg.userAge > 0 && $obg.userAge < 100)) {
					$valideFieldaGE = false;
					$('#age').prop('value', 'Помилка. Введіть коректні дані');
					$('#age').addClass("errNow");
				}
				return $valideFieldaGE;
			}
			
		});