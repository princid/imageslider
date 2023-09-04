let mainImg = document.getElementById('main__img');
let smallImgBoxes = document.getElementsByClassName('imageBox__img');
for(let i = 0; i < 4; i++){
    smallImgBoxes[i].addEventListener('click', () =>{
        mainImg.setAttribute("src", smallImgBoxes[i].src);
    })
}