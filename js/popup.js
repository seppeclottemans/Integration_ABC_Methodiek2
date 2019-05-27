$('document').ready(function () {

    // haalt de ingevulde elementen uit local storage op en zet deze in de html
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

    //Lesplan bewerken indien er op kaart wordt gedrukt
    var checkLesplan = '#lesplan' + "1" ;
    console.log(checkLesplan);
    $('' + checkLesplan).on("click", function() {
        window.location.href = "lesplan.html";
    });


    // globale variabelen aanmaken
    var eersteForm = document.getElementById("eersteForm");
    var btnNieuw = document.getElementById("btnNieuw");
    var tweedeForm = document.getElementById("tweedeForm");
    var btnVolgende = document.getElementById("btnVolgende");
    var btnVorige = document.getElementById("btnVorige");
    var btnFinish = document.getElementById("btnFinish");
    var popupCard = document.getElementById("popupCard");

    // het tonen van de popup's
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

    // pop up sluiten als er naast de form word geklikt.
    window.onclick = function (event) {
        if (event.target == eersteForm) {
            eersteForm.style.display = "none";
        }

        if (event.target == tweedeForm) {
            tweedeForm.style.display = "none";
        }

        if (event.target == popupCard) {
            popupCard.style.display = "none";
        }
    }

    // ingevulde elementen van de popup's opslaan in local storage
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
