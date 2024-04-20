let cloud1 = document.querySelector('.cloud1');
let cloud2 = document.querySelector('.cloud2');
let bush1 = document.querySelector('.bush1');
let bush2 = document.querySelector('.bush2');
let bush3 = document.querySelector('.bush3');
let title = document.querySelector('.title');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    cloud1.style.transform = `translateX(${value / 5}px)`;
    cloud2.style.transform = `translateX(-${value / 5}px)`
    bush1.style.transform = `translateY(${value / 5}px)`;
    bush2.style.transform = `translateX(-${value}px)`;
    bush3.style.transform = `translateX(${value}px)`;
    title.style.transform = `translateY(${value * 1.1}px)`;
});