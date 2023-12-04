document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const divs = document.querySelectorAll('[id^="n"]');
    const clear = document.getElementById("clear")

    divs.forEach(function (div) {
        div.addEventListener('click', function () {
            const number = div.textContent.replace(/\D/g, '');
            input.value += number

            if (input.value.length == 4) { 
                if (input.value == "0203") {
                    console.log("sucess")
                    window.location.href = "home.html"
                } else {
                    input.value = ''
                }
            }
        })
    });

    clear.addEventListener("click", function(){
        let newValue = input.value
        newValue = newValue.slice(0, -1)
        input.value = newValue
    });
});
