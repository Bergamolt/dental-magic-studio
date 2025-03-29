const ENDPOINT = "https://dental-magic-studio.bergamolt22.workers.dev/";

function sendContact() {
	const valid = validateContact();
	if(valid) {
		jQuery.fetch(ENDPOINT, {
		method: "POST",
		body: JSON.stringify({
			userName: $("#userName").val(),
			userTel: $("#userTel").val(),
			subject: $("#category").val()
		}),
		success:function(data){
		$("#mail-status").html(data);
		},
		error:function (){}
		});
	}
}

function validateContact() {
	let valid = true;	
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
	const valid = validateAppointment();
	if(valid) {
		jQuery.fetch(ENDPOINT, {
		method: "POST",
		body: JSON.stringify({
			userName: $("#userNameA").val(),
			userTel: $("#userTelA").val(),
			subject: "Запись на прием"
		}),
		success:function(data){
		$("#mail-statusA").html(data);
		},
		error:function (){}
		});
	}
}

function validateAppointment() {
	let valid = true;	
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
