const ENDPOINT = "https://form.dentalmagicstudio.com";

function sendContact() {
  const valid = validateContact();

  if (valid) {
    // Disable submit button
    $('.btnAction').prop('disabled', true);

    fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        userName: $("#userName").val(),
        userTel: $("#userTel").val(),
        subject: $("#category").val(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        $("#mail-status").html(`<p class='success'>${data.message}</p>`);
        $("#userName").val("");
        $("#userTel").val("");
        $("#category").val("");
        $(".demoInputBox").css("border-color", "");
        $(".info").html("");
      })
      .catch((error) => {
        if (error.statusMessage) {
          $("#mail-status").html(`<p class='error'>${error.statusMessage}</p>`);
        } else {
          console.error("Error:", error);
        }
      })
      .finally(() => {
        // Re-enable submit button after request completes
        $('.btnAction').prop('disabled', false);
      });
  }
}

function validateContact() {
  let valid = true;
  $(".demoInputBox").css("background-color", "");
  $(".info").html("");

  if (!$("#userName").val()) {
    $("#userName-info").html("(обязательно)");
    $("#userName").css("border-color", "#F42C04");
    valid = false;
  }
  if (!$("#userTel").val()) {
    $("#userTel-info").html("(обязательно)");
    $("#userTel").css("border-color", "#F42C04");
    valid = false;
  }

  return valid;
}

function sendAppointment() {
  const valid = validateAppointment();
  if (valid) {
    // Disable submit button
    $('.btnAction').prop('disabled', true);

    fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        userName: $("#userNameA").val(),
        userTel: $("#userTelA").val(),
        subject: "Запись на прием",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        $("#mail-statusA").html(`<p class='success'>${data.message}</p>`);
        $("#userNameA").val("");
        $("#userTelA").val("");
        $(".demoInputBox").css("border-color", "");
        $(".info").html("");
      })
      .catch((error) => {
        if (error.statusMessage) {
          $("#mail-statusA").html(
            `<p class='error'>${error.statusMessage}</p>`
          );
        } else {
          console.error("Error:", error);
        }
      })
      .finally(() => {
        // Re-enable submit button after request completes
        $('.btnAction').prop('disabled', false);
      });
  }
}

function validateAppointment() {
  let valid = true;
  $(".demoInputBox").css("background-color", "");
  $(".info").html("");

  if (!$("#userNameA").val()) {
    $("#userNameA-info").html("(обязательно)");
    $("#userNameA").css("border-color", "#F42C04");
    valid = false;
  }
  if (!$("#userTelA").val()) {
    $("#userTelA-info").html("(обязательно)");
    $("#userTelA").css("border-color", "#F42C04");
    valid = false;
  }

  return valid;
}
