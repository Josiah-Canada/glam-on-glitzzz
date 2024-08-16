var images = new Array('images/gyal.jpg','images/butterfly.jpg','images/rings.jpg','images/brooch.jpg')
var nextImage = 0

slideShow()

function slideShow() {
if(nextImage>=images.length) {nextImage=0}
$('.content')
.css('background-image', 'url("'+ images[nextImage++]+'")')
.fadeIn(500, function(){
    setTimeout(slideShow, 1000)
})
}







