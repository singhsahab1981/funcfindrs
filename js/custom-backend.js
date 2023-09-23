/**Validation for all the forms which handled by Ajax
 * Submit the form according to the form ID
*/
$.validator.addMethod("phonePattern", function (phone, element) {
    phone = phone.replace(/\s+/g, "");
    return this.optional(element) || /^\+?[0-9]{1,15}$/.test(phone);
}, "Please enter a valid phone number");



if($('#appointment-form').length){
    var isSubmitting = false; // Flag to track if form is already being submitted

    $("#appointment-form").validate({
      rules: {
          yname: "required",
          email: {
              required: true,
              email: true
          },
          phone: {
            required: true,
            phonePattern: true,
          },
          businessinfo: "required"
      },
      messages: {
          yname: "Please enter your full name",
          email: "Please enter your valid email address",
          phone: {
            required: "Please enter your phone number",
          },
          businessinfo: "Please let us know about you and your business"
      },
      onfocusout: function(element) {
        return $(element).valid();
      },
      submitHandler: function(form, event) {
             event.preventDefault();
             $('#appointment-form :submit').prop('disabled', true);
             if (isSubmitting) {
                return; // Prevent multiple submissions
            }
        
            isSubmitting = true; // Set the flag to indicate submission is in progress
            var formData = $(form).serialize();
            // Send the AJAX request
            $.ajax({
                type: "POST",
                url: ajax_params.ajax_url,
                data: formData,
                success: function(data) {
                    // Handle the successful response from the server
                    console.log(data);
                    var obj = JSON.parse(data);
                    console.log(obj);
                    if (obj.response == 'success') {

                        $('.info_message').html('Thank you for submitting your appointment request! Our team will review your request and get back to you as soon as possible. We appreciate your interest in our services and look forward to assisting you.');
                        $(form).find('input, textarea').val('');
                        
                        //var scrollDistance = 700;
                        // Animate the scroll
                        /*$('html, body').animate({
                            scrollTop: $(window).scrollTop() - scrollDistance
                        }, 500); */

                        isSubmitting = false; // Reset the flag after successful submission
                        $('#appointment-form :submit').prop('disabled', false);
                        setTimeout(function() {
                            $('.info_message').empty();
                          }, 9000);

                    }
                    else if (obj.response == 'error') {
                        $('.info_message').html('Something went wrong, Please try later.');
                    } else {
                        //window.location.href = document.location.origin+'/plans';
                    }
                },
                error: function(xhr, status, error) {
                    // Handle the error response from the server
                    //alert("An error occurred while submitting the form.");
                    console.log(xhr.responseText);
                    isSubmitting = false; // Reset the flag after successful submission
                }
            });        
        }
    });
  }


/**
 * Get started page appointment form
 * Validation and ajax submission
*/
if($('#appointment-form-get-started').length){
    var isSubmitting = false; // Flag to track if form is already being submitted
    $("#appointment-form-get-started").validate({
      rules: {
          yname: "required",
          email: {
              required: true,
              email: true
          },
          phone: {
            required: true,
            phonePattern: true,
          },
          interest: "required"
      },
      messages: {
          yname: "Please enter your full name",
          email: "Please enter your valid email address",
          phone: {
            required: "Please enter your phone number",
          },
          interest: "Please Select area of interest"
      },
      onfocusout: function(element) {
        return $(element).valid();
      },
      submitHandler: function(form, event) {
            event.preventDefault();
            $('#appointment-form-get-started :submit').prop('disabled', true);
            if (isSubmitting) {
                return; // Prevent multiple submissions
            }
        
            isSubmitting = true; // Set the flag to indicate submission is in progress
            var formData = $(form).serialize();
            // Send the AJAX request
            $.ajax({
                type: "POST",
                url: ajax_params.ajax_url,
                data: formData,
                success: function(data) {
                    // Handle the successful response from the server
                    console.log(data);
                    var obj = JSON.parse(data);
                    console.log(obj);
                    if (obj.response == 'success') {

                        $('.info_message').html('Thank you for submitting your appointment request!   Our team will review your request and get back to you as soon as possible. We appreciate your interest in our services and look forward to assisting you.');
                        $(form).find('input, textarea').val('');
                        //var scrollDistance = 700;
                        // Animate the scroll
                        /*$('html, body').animate({
                            scrollTop: $(window).scrollTop() - scrollDistance
                        }, 500); */

                        isSubmitting = false; // Reset the flag after successful submission

                        $('#appointment-form-get-started :submit').prop('disabled', false);

                        setTimeout(function() {
                            $('.info_message').empty();
                          }, 9000);
                    }
                    else if (obj.response == 'error') {
                        $('.info_message').html('Something went wrong, Please try later.');
                    } else {
                        //window.location.href = document.location.origin+'/plans';
                    }
                },
                error: function(xhr, status, error) {
                    // Handle the error response from the server
                    //alert("An error occurred while submitting the form.");
                    console.log(xhr.responseText);
                    isSubmitting = false; // Reset the flag after successful submission
                }
            });        
        }
    });
  }


 
jQuery(document).ready(function($) {
    
    $('#search-button').prop('disabled', true);
    /**Search Functionality 
    * Ajax
    */
    //Check the length of li to show the posts on page
    //var liLength     = $('.blog-listing-list li').length;
    var liLength     = $('.blog-listing-list li:not(.no-post-div)').length;
    var MainLength   = $('.blog-hero-inner-wrapper').length;
    var tot          = MainLength+liLength;
    $('#total_post').html('Showing ' +tot+ ' results'); 

    $('#search-button').on('click', function(event) {
        event.preventDefault();
        var categoryValue = $('#topics').val();
        var keywordValue = $('#searchText').val();
        var type         = $('#postType').val();
        var searchResultsContainer = $('.blog-listing-list');

        // Clear previous search results
        //searchResultsContainer.empty();

        var searchResultsContainer = $('.blog-listing-list');
        // Clear previous search results
        //searchResultsContainer.empty();

        if (categoryValue ) {
            if ( (categoryValue  && keywordValue.length == 0) || (keywordValue.length >= 3)){
                // Perform the search using AJAX
                $.ajax({
                    type: 'POST',
                    url: ajax_params.ajax_url,
                    data: {
                        action: 'custom_post_search',
                        category: categoryValue,
                        s       : keywordValue,
                        type    : type
                    },
                    success: function(response) {
                        $('.blog-hero-section-outer').hide();
                        $('.blog-listing-pagination').hide();
                        searchResultsContainer.html(response);
                        var numberOfItems = $('.blog-listing-list li:not(.no-post-div)').length;
                        $('#total_post').html('Showing ' +numberOfItems+ ' results'); 
                        setupMouseEnter();
                    }
                });
        } }else {
        $('.blog-hero-section-outer').show();
        $('.blog-listing-pagination').show();
        //searchResultsContainer.empty(); // Clear results if input length is less than 3
    }
    });


     // Function to enable or disable the button based on input and select values
     function toggleSearchButton() {
        const searchText = $('#searchText').val();
        const selectedTopic = $('#topics').val();

        if (searchText.length >= 3 || selectedTopic !== 'Select Category') {
            $('#search-button').prop('disabled', false);
        } else {
            $('#search-button').prop('disabled', true);
        }
    }

    // Attach the event handler to the input and select fields
    $('#searchText').on('keyup', toggleSearchButton);
    $('#topics').on('change', toggleSearchButton);


/**Newslatter form submission
 * Using the Ajax
*/

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
      submitHandler: function(form, event) {
        event.preventDefault();
        // Get the form data
        var formData = $(form).serialize();    
        // Send the AJAX request
        $.ajax({
            type: "POST",
            url: ajax_params.ajax_url,
            data: formData,
            success: function(data) {
                // Handle the successful response from the server
                //console.log(data);
                var obj = JSON.parse(data);
                //console.log(obj);
                if (obj.response == 'success') {

                    $('.custom_message').html('Thank you for Subscribing.');

                    $(form).find('input[name="email"]').val('');


                    setTimeout(function() {
                        $('.custom_message').empty();
                      }, 9000);

                }  else {
                    $('.custom_message').html('Sorry, Something went wrong. Please try again.');
                }
            },
            error: function(xhr, status, error) {
                // Handle the error response from the server
                //alert("An error occurred while submitting the form.");
                console.log(status);
                console.log(error);
            }
        });      
        }
    });
  }

   
/** 
 * Contact form validation 
 * And Form submission
*/
if($('#contact-form').length){
    var isSubmitting = false; // Flag to track if form is already being submitted
    $("#contact-form").validate({
      rules: {
          yname: "required",
          email: {
              required: true,
              email: true
          },
          
          //businessinfo: "required",
          //terms: "required"
      },
      messages: {
          yname: "Please enter your full name",
          email: "Please enter your valid email address",
          //businessinfo: "Please let us know about you and your business",
          //terms: "Please accept our tems and conditions"
      },
      onfocusout: function(element) {
        return $(element).valid();
      },
      submitHandler: function(form, event) {

        event.preventDefault();
        $('#contact-form :submit').prop('disabled', true);
        if (isSubmitting) {
            return; // Prevent multiple submissions
        }
    
        isSubmitting = true; // Set the flag to indicate submission is in progress
        var formData = $(form).serialize();
        // Send the AJAX request
        $.ajax({
            type: "POST",
            url: ajax_params.ajax_url,
            data: formData,
            success: function(data) {
                // Handle the successful response from the server
                console.log(data);
                var obj = JSON.parse(data);
                console.log(obj);
                if (obj.response == 'success') {

                    $('.info_message').html('Thank you for reaching out to us through our contact form. We have received your message and will get back to you as soon as possible.').css('color', '#38A6BF');
                    $(form).find('input, textarea').val('');
                    $(form).find('input[type="checkbox"]').prop('checked', false);

                    isSubmitting = false; // Reset the flag after successful submission
                    $('#contact-form :submit').prop('disabled', false);
                    setTimeout(function() {
                        $('.info_message').empty();
                      }, 9000);
                }
                else if (obj.response == 'error') {
                    $('.info_message').html('Something went wrong, Please try later.').css('color', '#38A6BF');
                } else {
                    //window.location.href = document.location.origin+'/plans';
                }
            },
            error: function(xhr, status, error) {
                // Handle the error response from the server
                //alert("An error occurred while submitting the form.");
                console.log(xhr.responseText);
                isSubmitting = false; // Reset the flag after error
            }
        });
                      
        }
    });
  }  

       function setupMouseEnter() {
        jQuery('.blog-main-listing-area-outer .blog-list-main').mouseenter(function() {
            var config = {
				over: showSubmenu,  // Function to run when hovering over the element
				out: hideSubmenu,  // Function to run when moving the mouse out
				};

				// Apply HoverIntent to the list items
				jQuery('.blog-list-main').hoverIntent(config);

				// Function to show the submenu and modify the clip-path
				function showSubmenu() {
				// Add a class to the li element to indicate it's being hovered
				jQuery(this).addClass('hovered');
				}

				// Function to hide the submenu and reset the clip-path
				function hideSubmenu() {
				// Remove the 'hovered' class and reset the clip-path
				jQuery('.hovered').removeClass('hovered');
				}
        });
    }
    
  
});
/**Search form Reset the page */
/*if($('#reset-button').length){
    document.getElementById('reset-button').addEventListener('click', function() {
        location.reload(); // Refresh the page
    });
}*/


