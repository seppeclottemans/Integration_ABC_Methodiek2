$(function () {
    console.log('Script loaded');


    var eersteForm = document.getElementById("eersteForm");
    var btnNieuw = document.getElementById("btnNieuw");
    var tweedeForm = document.getElementById("tweedeForm");
    var btnVolgende = document.getElementById("btnVolgende");
    var btnVorige = document.getElementById("btnVorige");

    btnNieuw.onclick = function () {
        eersteForm.style.display = "block";
    }

    btnVolgende.onclick = function () {
        tweedeForm.style.display = "block";
        eersteForm.style.display = "none";
    }

    btnVorige.onclick = function () {
        eersteForm.style.display = "block";
        tweedeForm.style.display = "none";
    }

    
    window.onclick = function (event) {
        if (event.target == eersteForm) {
            eersteForm.style.display = "none";
        }
        if (event.target == tweedeForm) {
            tweedeForm.style.display = "none";
        }
    }



});
