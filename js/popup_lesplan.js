$('document').ready(function () {

    // haalt de ingevulde elementen uit local storage op en zet deze in de html
    var weekBereik = localStorage.getItem('weekBereik');
    weekBereik = JSON.parse(weekBereik);
    var ingevuldweekBereik = $('<p>').text(weekBereik);
    ingevuldweekBereik.attr('id', "ingevuldweekBereik");
    $('#fase1').append(ingevuldweekBereik);
    
    var doelstellingenWeek = localStorage.getItem('doelstellingenWeek');
    doelstellingenWeek = JSON.parse(doelstellingenWeek);
    var ingevulddoelstellingenWeek = $('<p>').text(doelstellingenWeek);
    ingevulddoelstellingenWeek.attr('id', "ingevulddoelstellingenWeek");
    $('#fase1').append(ingevulddoelstellingenWeek);

    // globale variabelen aanmaken 
    var eersteForm = document.getElementById("eersteForm");
    var btnNieuw = document.getElementById("btnNieuw");
    var btnFinish = document.getElementById("btnFinish");

    // display van de popup
    btnNieuw.onclick = function () {
        eersteForm.style.display = "block";
    }

    // ingevulde elementen van de popup's opslaan in local storage
    $("#btnFinish").on("click", function () {
        eersteForm.style.display = "none";
        var weekBereik = $('#weekBereik').val();
        localStorage.setItem("weekBereik", JSON.stringify(weekBereik));
        var doelstellingenWeek = $('#doelstellingenWeek').val();
        localStorage.setItem("doelstellingenWeek", JSON.stringify(doelstellingenWeek));
    });

    // pop up sluiten als er naast de form word geklikt.
    window.onclick = function (event) {
        if (event.target == eersteForm) {
            eersteForm.style.display = "none";
        }
    }

});
