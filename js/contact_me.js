function validateForm() {
    var name = document.forms["contact_me"]["name"].value;
    var email = document.forms["contact_me"]["email"].value;
    var subject = document.forms["contact_me"]["subject"].value;
    var message = document.forms["contact_me"]["message"].value;
    if (name == null || name === "", email == null || email === "", subject == null || subject === "", message == null || message === "") {
        document.getElementById("contact_me_error").innerHTML = "Please Fill All Required Field"
      return false;
    }
}