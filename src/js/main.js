var quoteForm = document.getElementById('quote-form');
var quoteButton = document.getElementById('submit-quote');
var quoteName = document.getElementById('first_name');
var $quoteLast = $('#last_name');
var quoteEmail = document.getElementById('email');
var $quotePhone = $('#phone_number');
var $quoteCompany = $('#company');
var $quoteCity = $('#city');
var $quoteState = $('#state');
var $quoteComments = $('#comments');
var $alert = $('#alert');
var $annotation = $('#front-annotation');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// close event for annotation
$('.annotation-content .close').click(function() {
    $('.annotation-content').css('display', 'none');
});

// submit quote
quoteButton.addEventListener('click', function(event) {
    var errorMessages = [];
    var toHTML = "";

    if (quoteName.value == "") {
        errorMessages.push('First name needs to be filled out.');
    }
    if (validateEmail(quoteEmail.value) === false) {
        errorMessages.push('Invalid E-mail Address.');
    }
    // if no errors then submit
    if (errorMessages.length !== 0) {
        // if errors throw all errors
        errorMessages.map(function(message) {
            toHTML += `<p style="color: red;">* ${message}</p>`;
        });
        document.getElementById('alert').innerHTML = toHTML;
        document.getElementById('front-annotation').style.display = "block";
    } else {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: `/api/get-quote`,
            data: { 
                first_name: quoteName.value,
                last_name: $quoteLast.val(),
                email: quoteEmail.value,
                phone_number: $quotePhone.val(),
                company: $quoteCompany.val(),
                city: $quoteCity.val(),
                state: $quoteState.val(),
                comments: $quoteComments.val()
            },
            dataType: "json",
            cache: true
        }).done(function(data) {
            if (data.success) {
                $alert.html(`<p style="color: green;">${data.message}</p>`);
                $annotation.css('display', 'block');
            } else if (data.success === false) {
                $alert.html(`<p style="color: red;">* ${data.message}</p>`);
                $annotation.css('display', 'block');
            } else {
                $alert.html(`<p style="color: red;">* Message was not sent successfully.  Please try again.</p>`);
                $annotation.css('display', 'block');
            }
        }).fail(function() {
            $alert.html(`<p style="color: red;">* Message was not sent successfully.  Please try again.</p>`);
            $annotation.css('display', 'block');
        }); // end ajax request
    }
}); // quote click event ends