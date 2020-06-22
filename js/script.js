function scrollLeft(){
    document.querySelector('.scrolling-wrapper').scrollLeft += 285;
}
function scrollRight(){
    document.querySelector('.scrolling-wrapper').scrollLeft -= 285;
}
(function listen(){
    let chevronRight = document.querySelector('.chevron-right');
    chevronRight.addEventListener('click', scrollLeft);
    let chevronLeft = document.querySelector('.chevron-left');
    chevronLeft.addEventListener('click', scrollRight);
})()


/* $(function () {
    $('[data-toggle="tooltip"]').tooltip()
}) */