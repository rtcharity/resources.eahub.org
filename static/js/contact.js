function submitForm() {
  var form = $('#form');
  var errorMsg = $('#contact-error');
  var successMsg = $('#contact-success');
  var updatedForm = "form-name=" + form.attr('name') + "&" + form.serialize();

  $.ajax({
    //URL of netlify page resources.eahub.org is redirected to
    url: "https://elated-khorana-9gb345.netlify.com/contact/",
    method: "POST",
    headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin":"*"
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
