$(function () {
    console.log('Script loaded');


    var eersteForm = document.getElementById("eersteForm");
    var btnNieuw = document.getElementById("btnNieuw");
    var tweedeForm = document.getElementById("tweedeForm");
    var btnVolgende = document.getElementById("btnVolgende");
    var btnVorige = document.getElementById("btnVorige");
    var btnFinish = document.getElementById("btnFinish");

    btnNieuw.onclick = function () {
        eersteForm.style.display = "block";
    }

    $("#btnVolgende").on("click", function () {
        var Opleidingsonderdeel = $('#Opleidingsonderdeel').val();
        localStorage.setItem("Opleidingsonderdeel", JSON.stringify(Opleidingsonderdeel));
        var Deeltraject = $('#Deeltraject').val();
        localStorage.setItem("Deeltraject", JSON.stringify(Deeltraject));
        var Docent = $('#Docent').val();
        localStorage.setItem("Docent",
        JSON.stringify(Docent));
        var Semester = $('#Semester').val();
        localStorage.setItem("Semester",
        JSON.stringify(Semester));
        tweedeForm.style.display = "block";
        eersteForm.style.display = "none";
    });

    btnVorige.onclick = function () {
        eersteForm.style.display = "block";
        tweedeForm.style.display = "none";
    }
    
    btnFinish.onclick = function () {
        eersteForm.style.display = "none";
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
