var element = document.getElementById('carousels');
var xCoord = 0;

var makeInterval = function () {
    return window.setInterval(function(){  
        xCoord = ( xCoord - 300 ) % 1200;
        element.style.transform='translate(' + xCoord +'px,0)';
    },2000);
}

var interval = makeInterval();

document.getElementById('btn-next').addEventListener('click', function() {
    xCoord = ( xCoord - 300 ) % 1200;
    element.style.transform='translate(' + xCoord +'px,0)';
    // 1. interval 초기화하고 다시 생성
    window.clearInterval(interval);
    interval = makeInterval();
    // 2. 인덱스 돌려놓기
    // xCoord = ( xCoord + 300 ) % 1200;
     // 원래 인덱스로 되돌려놓음
})