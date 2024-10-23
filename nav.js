var clickTimes = 0;
function press(){
    if(!clickTimes){
        $('.mainNav').css('width', '25%');
        $('.li').css('display', 'block');
        $('.li').css('color', '#333');
        clickTimes = 1;
    } else {
        $('.mainNav').css('width', '0');
        $('.li').css('display', 'none');
        $('.li').css('color', '#fff');
        clickTimes = 0;

    }
}