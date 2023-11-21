function darkMode() {
    document.body.classList.toggle("dark-mode");
}

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParentes = document.querySelector('.control-mainproduct3 ul');

let sectionIndex = 0;

function setIndex(index) {
    document.querySelector('.control-mainproduct3 .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (index) * -20 + '%)';
    indicatorParentes.children[index].classList.add('selected');
}

document.querySelectorAll('.control-mainproduct3 li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function() {
        sectionIndex = ind
        indicator.classList.add('selected');
        setIndex(sectionIndex);
    })
});
rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 0;
    setIndex(sectionIndex);

});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 4;
    setIndex(sectionIndex);
});



