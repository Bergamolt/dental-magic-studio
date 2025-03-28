function sendContact() {
	var valid;	
	valid = validateContact();
	if(valid) {
		jQuery.ajax({
		url: "forms/contact.php",
		data:'userName='+$("#userName").val()+'&userTel='+$("#userTel").val()+'&subject='+$("#category").val(),
		type: "POST",
		success:function(data){
		$("#mail-status").html(data);
		},
		error:function (){}
		});
	}
}

function validateContact() {
	var valid = true;	
	$(".demoInputBox").css('background-color','');
	$(".info").html('');
	
	if(!$("#userName").val()) {
		$("#userName-info").html("(обязательно)");
		$("#userName").css('border-color','#F42C04');
		valid = false;
	}
	if(!$("#userTel").val()) {
		$("#userTel-info").html("(обязательно)");
		$("#userTel").css('border-color','#F42C04');
		valid = false;
	}
	
	return valid;
}

function sendAppointment() {
	var valid;	
	valid = validateAppointment();
	if(valid) {
		jQuery.ajax({
		url: "forms/contact.php",
		data:'userName='+$("#userNameA").val()+'&userTel='+$("#userTelA").val()+'&subject=Запись на прием',
		type: "POST",
		success:function(data){
		$("#mail-statusA").html(data);
		},
		error:function (){}
		});
	}
}

function validateAppointment() {
	var valid = true;	
	$(".demoInputBox").css('background-color','');
	$(".info").html('');
	
	if(!$("#userNameA").val()) {
		$("#userNameA-info").html("(обязательно)");
		$("#userNameA").css('border-color','#F42C04');
		valid = false;
	}
	if(!$("#userTelA").val()) {
		$("#userTelA-info").html("(обязательно)");
		$("#userTelA").css('border-color','#F42C04');
		valid = false;
	}
	
	return valid;
}
