"use strict"

let select = document.querySelector('.filter__sel');
select.addEventListener("click", function () {
    select.classList.toggle("click");

})

let details = document.querySelector('.select');
let detailsContentOne = document.querySelector('.filter__details-content-one');
let detailsContentTwo = document.querySelector('.filter__details-content-two');
let detailsContentThree = document.querySelector('.filter__details-content-three');
let dN = document.querySelector('.filter__text');

if (details) {
    details.addEventListener('change', () => {
        if (details.options[details.selectedIndex].value == 0) {
            detailsContentThree.classList.remove('active-details-three');
            detailsContentTwo.classList.remove('active-details-two');
            detailsContentOne.classList.remove('active-details');
            dN.classList.remove('dn')
        }
        if (details.options[details.selectedIndex].value == 1) {
            detailsContentTwo.classList.remove('active-details-two');
            detailsContentThree.classList.remove('active-details-three');
            detailsContentOne.classList.add('active-details');
            dN.classList.add('dn')
        }
        if (details.options[details.selectedIndex].value == 2) {
            detailsContentOne.classList.remove('active-details');
            detailsContentThree.classList.remove('active-details-three');
            detailsContentTwo.classList.add('active-details-two');
            dN.classList.add('dn')
        }
        if (details.options[details.selectedIndex].value == 3) {
            detailsContentOne.classList.remove('active-details');
            detailsContentTwo.classList.remove('active-details-two');
            detailsContentThree.classList.add('active-details-three');
            dN.classList.add('dn')
        }
    })
}



