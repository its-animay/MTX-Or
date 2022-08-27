/* Show login form on button click */
$('.loginBtn').click(function(){
    $('.login').show();
    $('.signUp').hide();
    /* border bottom on button cick */
    $('.loginBtn').css({'border-bottom' : '2px solid #d44882'});
    /* remove border after click */
    $('.signUpBtn').css({'border-style' : 'none'});
});

/* Show sign up form on button click */
$('.signUpBtn').click(function(){
    $('.login').hide();
    $('.signUp').show();
    /* border bottom on button click */
    $('.signUpBtn').css({'border-bottom' : '2px solid #d44882'});
    /* remove border after click */
    $('.loginBtn').css({'border-style' : 'none'});
});
