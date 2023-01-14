var showHeart = document.querySelector('.card__heart');
var isMenuShow = false;
showHeart.addEventListener("click", event => {
    if (isMenuShow ) {
        event.target.style.backgroundImage = "url('/img/active/heard-black.png')";
        isMenuShow  = false;
    } else {
        event.target.style.backgroundImage = "url('/img/active/heart-red.png')";
        isMenuShow  = true;
    }
});