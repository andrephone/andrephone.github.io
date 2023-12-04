const btnMenu = document.getElementById('btn-menu');
const btnBack = document.getElementById('btn-back');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const box = document.getElementById('box');
    const main = document.getElementById('main');
    const child1 = document.getElementById('child1');

    box.classList.toggle('active');
    main.classList.toggle('active');
    child1.classList.toggle('active');
}

function toggleMenuBack(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const box = document.getElementById('box');
    const main = document.getElementById('main');
    const child1 = document.getElementById('child1');

    box.classList.remove('active');
    main.classList.remove('active');
    child1.classList.remove('active');
}

function search(){
    let input = document.getElementById("searchBar").value
    let x = document.getElementsByClassName("item-menu")
    input = input.toLowerCase()

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none"
        } else {
            x[i].style.display = "list-item"
        }
    }
}

const hours = document.getElementById("hour")
const mins = document.getElementById("min")

const clock = setInterval(function time() {
    let dateToday = new Date()
    let hour = dateToday.getHours()
    let min = dateToday.getMinutes()

    if (hour < 10) hour = '0'+hour
    if (min < 10) min = '0'+min

    hours.textContent = hour
    mins.textContent = min
})

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

btnBack.addEventListener('click', toggleMenuBack);
btnBack.addEventListener('touchstart', toggleMenuBack);


