function submitForm() {
  var form = $('#form');
  var errorMsg = $('#contact-error');
  var successMsg = $('#contact-success');
  var updatedForm = "form-name=" + form.attr('name') + "&" + form.serialize();

  $.ajax({
    url: "https://confident-minsky-f713d6.netlify.com/contact/",
    method: "POST",
    headers: {
        "content-type": "application/x-www-form-urlencoded"
    },
    data: updatedForm,
    success: function(result) {
      form.css('display', 'none');
      successMsg.css('display', 'block');
    },
    error: function(err) {
      form.css('display', 'none');
      errorMsg.css('display', 'block');
    }
  });
}
