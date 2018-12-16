$("#lean-form").submit(function(e) {
  sentToZap(e,"lean")
})

$("#tech-form").submit(function(e) {
  sentToZap(e,"tech")
})

function sentToZap(e, form) {
  e.preventDefault();
  var content;
  var zapHook;
  if (form == "tech") {
    content = $('#tech-form').serialize()
    zapHook = "https://hooks.zapier.com/hooks/catch/4168909/cgxj2b/"
  }
  else if (form == "lean") {
    content = $('#lean-form').serialize()
    zapHook = "https://hooks.zapier.com/hooks/catch/4168909/cge0nf/"
  } else {
    console.log('form does not exist')
  }
  $.post(zapHook,
    content,
    function(data) {
      window.location = "http://localhost:1313/contact-success"
    }
  )
}
