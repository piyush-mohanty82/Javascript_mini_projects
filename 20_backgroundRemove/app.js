var imgbox = document.querySelector(".img-box");
var imgwrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = imgbox.offsetWidth + "px";
var leftSpace = imgbox.offsetLeft;
imgbox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgwrap.style.width = boxWidth;
    line.style.left = boxWidth;
}