
window.fbAsyncInit = function () {
    FB.init({
        appId: '442495863122562',
        cookie: true,
        xfbml: true,
        version: 'v5.0'
    });

    FB.AppEvents.logPageView();

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$('.signin-btn').on('click', function () {
    $('.register').css({
        'transition': '1s',
        'transform': 'rotatey(180deg)'
    })
    setTimeout(() => {
        $('.signup-form').css('display', 'none')
        $('.signin-form').css('display', 'unset')
    }, 300);
})
$('.signup-btn').on('click', function () {
    $('.register').css({
        'transition': '1s',
        'transform': 'rotatey(-180deg)',
        'transform': 'scale(1)',

    })
    setTimeout(() => {
        $('.signup-form').css('display', 'unset')
        $('.signin-form').css('display', 'none')
    }, 300);
})
