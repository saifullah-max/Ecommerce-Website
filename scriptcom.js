let mainImg = document.querySelector(".mainImg");
let smallImgs = document.querySelectorAll(".smallImg1");

smallImgs.forEach(function (smallImg1, index) {
    smallImg1.onclick = function(){
        mainImg.src = smallImg1.src;
    }
});



