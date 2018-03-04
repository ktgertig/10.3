$(function(){
	//this code will execute after the DOM is loaded
});
var carouselList = $('#carousel ul');

setInterval(changeSlide, 300);

function changeSlide() {
	carouselList.animate({'marginLeft':'-=400px'}, 500);
}