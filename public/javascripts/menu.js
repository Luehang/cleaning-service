// JS Random state function, no effect on actual implementation

// ;(function (window, document) {
//     var check, RNG;
//     check = document.getElementById('check');
//     RNG = Math.round(Math.random());
//     check.checked = !!RNG;
// }(window, document));

$('.main').css('display', 'none');
setTimeout(function(){ 
    $('.main').css('display', 'block');
}, 3000);