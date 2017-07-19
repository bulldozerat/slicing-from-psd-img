//check the email
function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function () {
    //to not submit the form
    $("form").submit(function() {
        return false;
    });

    //validate
   $('#submit-btn').click(function () {
       let textInput = $('#name-input');
       let emailInput = $('#email-input');
       let textArea =$('#textarea');
       let select = $('#select');

       if( textInput.val().length !== 0 && emailInput.val().length !== 0 && textArea.val().length !== 0 && select.val() !== null){
           if(textInput.val().length > 2 && textInput.val().length <= 100 && textInput.val() == textInput.val().toLowerCase()){
                if ( isEmail(emailInput.val()) ){
                    if ($.trim(textArea.val().length) >= 10 && $.trim(textArea.val().length) <= 500) {
                        $('#error-div').css({opacity: '1.0'}).html('Your form has been submitted');
                    }else{
                        $('#error-div').css({opacity: '1.0'}).html('The text area must be from 10 to 500 characters long');
                    }
                }else {
                    $('#error-div').css({opacity: '1.0'}).html('Please enter a valid email address');
                }
           }else {
               $('#error-div').css({opacity: '1.0'}).html('Only small letters and from 3 to 100 characters allowed');
           }
       }else{
           $('#error-div').css({opacity: '1.0'});
       }
   });

   //hamburger menu
    $('.main-nav i').click(function () {
        if($('.main-nav ul').is(':visible')) {
            $('.main-nav ul').css({display: 'none'});
        }else{
            $('.main-nav ul').css({display: 'inline-block'});
        }
    });
});

