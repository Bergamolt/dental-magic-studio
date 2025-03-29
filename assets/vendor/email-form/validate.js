const ENDPOINT = "https://dental-magic-studio.bergamolt22.workers.dev/";

function sendContact() {
  const valid = validateContact();

  if (valid) {
    fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/form-data",
      },
      body: JSON.stringify({
        userName: $("#userName").val(),
        userTel: $("#userTel").val(),
        subject: $("#category").val(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        $("#mail-status").html(`<p class='success'>${data.message}</p>`);
      })
      .catch((error) => {
        if (error.statusMessage) {
          $("#mail-status").html(`<p class='error'>${error.statusMessage}</p>`);
        } else {
          console.error("Error:", error);
        }
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
    fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/form-data",
      },
      body: JSON.stringify({
        userName: $("#userNameA").val(),
        userTel: $("#userTelA").val(),
        subject: "Запись на прием",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        $("#mail-statusA").html(`<p class='success'>${data.message}</p>`);
      })
      .catch((error) => {
        if (error.statusMessage) {
          $("#mail-statusA").html(
            `<p class='error'>${error.statusMessage}</p>`
          );
        } else {
          console.error("Error:", error);
        }
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
