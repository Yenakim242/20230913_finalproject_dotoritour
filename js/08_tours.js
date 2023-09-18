const productContainers = [...document.querySelectorAll('.product-container')]; // '...document' : Spread operator - expands an array into a list
const preBtn = [...document.querySelectorAll('.pre-btn-sugerencia')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn-sugerencia')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;  
    })

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})