if($('#appointment-form').length){
  $("#appointment-form").validate({
    rules: {
        yname: "required",
        bname: "required",
        email: {
            required: true,
            email: true
        },
        phone: "required",
        businessinfo: "required"
    },
    messages: {
        yname: "Please enter your full name",
        bname: "Please enter your business name",
        email: "Please enter your valid email address",
        phone: "Please enter your mobile",
        businessinfo: "Please let us know about you and your business"
    },
    onfocusout: function(element) {
      return $(element).valid();
    },
    submitHandler: function(form) {
                    
      }
  });
}

if($('#contact-form').length){
  $("#contact-form").validate({
    rules: {
        yname: "required",
        email: {
            required: true,
            email: true
        },
        phone: "required",
        businessinfo: "required"
    },
    messages: {
        yname: "Please enter your full name",
        email: "Please enter your valid email address",
        phone: "Please enter your mobile",
        businessinfo: "Please let us know about you and your business"
    },
    onfocusout: function(element) {
      return $(element).valid();
    },
    submitHandler: function(form) {
                    
      }
  });
}

if($('#searchForm').length){
  $("#searchForm").validate({
    rules: {
      searchText: {
        required: true,
        minlength: 3
      }
    },
    messages: {
      searchText: {
        required: "Please enter something search box",
        minlength: "Please enter at least 3 characters"
      }
    },
    onfocusout: function(element) {
      return $(element).valid();
    }
});
}

if($('#newsletterForm').length){
  $("#newsletterForm").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
    },
    messages: {
        email: "Please enter your valid email address",
    },
    onfocusout: function(element) {
      return $(element).valid();
    },
    submitHandler: function(form) {
                    
      }
  });
}