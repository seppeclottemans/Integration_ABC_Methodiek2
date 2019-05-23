$('document').ready(function () {

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

    var eersteForm = document.getElementById("eersteForm");
    var btnNieuw = document.getElementById("btnNieuw");
    var btnFinish = document.getElementById("btnFinish");

    btnNieuw.onclick = function () {
        eersteForm.style.display = "block";
    }

    $("#btnFinish").on("click", function () {
        eersteForm.style.display = "none";
        var weekBereik = $('#weekBereik').val();
        localStorage.setItem("weekBereik", JSON.stringify(weekBereik));
        var doelstellingenWeek = $('#doelstellingenWeek').val();
        localStorage.setItem("doelstellingenWeek", JSON.stringify(doelstellingenWeek));
    });


    window.onclick = function (event) {
        if (event.target == eersteForm) {
            eersteForm.style.display = "none";
        }
    }

});
