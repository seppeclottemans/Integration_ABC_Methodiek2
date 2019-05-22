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
        
        localStorage.getItem('Opleidingsonderdeel');
        var ingevuldOpleidingsonderdeel = $('<p>').text(Opleidingsonderdeel);
        ingevuldOpleidingsonderdeel.attr('id', "ingevuldOpleidingsonderdeel");
        $('#lesplan1').append(ingevuldOpleidingsonderdeel);
        
        tweedeForm.style.display = "block";
        eersteForm.style.display = "none";
    });

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
