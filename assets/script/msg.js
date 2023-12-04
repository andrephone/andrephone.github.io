document.addEventListener('DOMContentLoaded', function () {
    const divs = document.querySelectorAll('div.msg-erro');
    const msgC = document.getElementById("msg-erro")

    divs.forEach(function (div) {
        div.addEventListener('click', function () {
            msgC.style.display = "grid";

            setTimeout(function(){
                msgC.style.display = "none";
            }, 2000);
        });
    });
}); 
