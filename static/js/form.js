$("#contact-form").submit(function(e) {
  e.preventDefault();
  console.log($('#contact-form').serialize());
  $.post('https://hooks.zapier.com/hooks/catch/4168909/cge0nf/',
    $('#contact-form').serialize(),
    function(data) {
      console.log(data);
      window.location = "http://localhost:1313/contact-success"
    }
  )
})
