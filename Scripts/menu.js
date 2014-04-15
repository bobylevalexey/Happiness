$(function() {

    $('.menu > a').hover(
        function () {
            switch ($(this).attr('class')) {
                case 'service' :
                case 'contact' :
                    topA = '20px';
                    break;
                case 'about_us' :
                case 'home' :
                    topA = '-5px';
                    break;
                case 'feed' :
                case 'review' :
                    topA = '45px';
                    break;
            }
            $(this).stop().animate({
                'marginTop':topA
            },200);
        },
        function () {
            switch ($(this).attr('class')) {
                case 'service' :
                case 'contact' :
                    topA = '25px';
                    break;
                case 'about_us' :
                case 'home' :
                    topA = '0px';
                    break;
                case 'feed' :
                case 'review' :
                    topA = '50px';
                    break;
            }
            $(this).stop().animate({
                'marginTop':topA
            },200);
        }
    )

});