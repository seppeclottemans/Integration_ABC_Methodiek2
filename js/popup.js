$('document').ready(function () {
    console.log('Script loaded');

    var Opleidingsonderdeel = localStorage.getItem('Opleidingsonderdeel');
    Opleidingsonderdeel = JSON.parse(Opleidingsonderdeel);
    var ingevuldOpleidingsonderdeel = $('<h2>').text(Opleidingsonderdeel);
    ingevuldOpleidingsonderdeel.attr('id', "ingevuldOpleidingsonderdeel");
    $('#lesplan1').append(ingevuldOpleidingsonderdeel);

    var Deeltraject = localStorage.getItem('Deeltraject');
    Deeltraject = JSON.parse(Deeltraject);
    var ingevuldDeeltraject = $('<p>').text(Deeltraject);
    ingevuldDeeltraject.attr('id', "ingevuldDeeltraject");
    $('#lesplan1').append(ingevuldDeeltraject);
    $("#lesplan1").append("<br>");

    var Docent = localStorage.getItem('Docent');
    Docent = JSON.parse(Docent);
    var ingevuldDocent = $('<p>').text(Docent);
    ingevuldDocent.attr('id', "ingevuldDocent");
    if (Docent != null) {
        $("#lesplan1").append("<p class='onderwerpen'>docent(en):</p>");
    }
    $("#lesplan1").append(ingevuldDocent);
    $("#lesplan1").append("<br>");

    var Semester = localStorage.getItem('Semester');
    Semester = JSON.parse(Semester);
    if (Semester != null) {
        $("#lesplan1").append("<p class='onderwerpen'>Deeltraject:</p>");
    }
    var ingevuldSemester = $('<p>').text(Semester);
    ingevuldSemester.attr('id', "ingevuldSemester");
    $("#lesplan1").append(ingevuldSemester);

    var doelstellingen = localStorage.getItem('doelstellingen');
    doelstellingen = JSON.parse(doelstellingen);
    var ingevulddoelstellingen = $('<p>').text(doelstellingen);
    ingevulddoelstellingen.attr('id', "ingevulddoelstellingen");
    $("#lesplan1").append(ingevulddoelstellingen);

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

    $("#btnFinish").on("click", function saveToLocalStorage() {
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
        var vakbeschrijving = $('#vakbeschrijving').val();
        localStorage.setItem("vakbeschrijving",
            JSON.stringify(vakbeschrijving));
        var doelstellingen = $('#doelstellingen').val();
        localStorage.setItem("doelstellingen",
            JSON.stringify(doelstellingen));
        var doelstellingen = $('#doelstellingen').val();
        localStorage.setItem("doelstellingen",
            JSON.stringify(doelstellingen));
    });

});
