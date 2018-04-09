var element = document.getElementById('carousels');
var xCoord = 0;

var interval = window.setInterval(function(){
    
    xCoord = ( xCoord - 300 ) % 1200;
    element.style.transform='translate3d(' + xCoord +'px,0,0)';

},2000);