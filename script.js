var main = document.getElementById("main");
var smallimg = document.getElementsByClassName("small-img-1");

smallimg[0].onclick = function() {
    main.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    main.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    main.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    main.src = smallimg[3].src;
}