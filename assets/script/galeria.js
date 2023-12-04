document.addEventListener('DOMContentLoaded', function () {
    const divs = document.querySelectorAll('div.img');
    const section = document.querySelector("section")
    divs.forEach(function (div) {
        div.addEventListener('click', function () {
            div.classList.toggle("active")
            section.classList.toggle("active")
        })
    });
}); 

