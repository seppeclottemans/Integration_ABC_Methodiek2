$(function () {
    // titel invullen ...
    var weekBereik = localStorage.getItem('weekBereik');
    weekBereik = JSON.parse(weekBereik);

    var ingevultWeekBereik = $('<h1>').text(weekBereik);

    ingevultWeekBereik.attr('class', "title");
    $('header').prepend(ingevultWeekBereik);

    //doelstellingen invullen
    var doelstellingen = $('<p>').text(JSON.parse(localStorage.getItem('doelstellingenWeek')));
    $('.doelstellingen').after(doelstellingen);

    $(".column").sortable({ // .sortable() is jqueryUI dat in dit geval 5 collomen 'sorteerbaar' maakt verbindt
        connectWith: ".column", // whish columns???.... columns with class:"columns"
        cancel: ".portlet-toggle",
        placeholder: "kaartjes-placeholder ui-corner-all",
        stop: function (event, ui) { // wanneer een kaartje losgelaten wordt...
            var kaartjeDiv = ui.item[0];
            nieuweDiv(event, kaartjeDiv);
        }
    });

    function nieuweDiv(event, itemClass) { // maakt telkens een nieuw kaartje aan wanneer er minder dan 6 zijn
        var aantalStartKaartjes = $(".kaartje-start .portlet").length;
        if (aantalStartKaartjes < 6) {

            var cloneItem = $(itemClass).clone();

            $(cloneItem).appendTo($(".kaartje-start")).find(".ui-icon").on("click", function () {

                var deHeader = $(this).parent();
                var deDiv = deHeader.parent();
                console.log('ye');

                $(deDiv).remove();

            });
        }
    }

    $(".portlet") // maakt onder ander het kruisje om de kaartjes weg te klikken ...
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<img src='../nav-images/cancel-cross.svg' alt='cancel cross' class='ui-icon portlet-toggle'></img>")


    $(".ui-icon").on("click", function () { // de functie om ze weg te klikken ...

        var deHeader = $(this).parent();
        var deDiv = deHeader.parent();
        $(deDiv).remove();
    });


    $(".klaarButton").on('click', function () { // om naar je voledige lesplan te gaan samen met al je kaartjes en hun gegeven plekje (via localStorage) ...
        // een nieuw object van een fase maken met zijn naam en doelstellingen er bij...
        var fase = localStorage.getItem('weekBereik');

        var faseDoelstellingen = localStorage.getItem('doelstellingenWeek');
        var faseObject = objectVanFase(); // returned een object{} ...

        faseObject.fase_id = JSON.parse(fase);
        faseObject.doelstellingen = JSON.parse(faseDoelstellingen);

        var theArray = JSON.parse(localStorage.getItem('allFases')); // alle fases komen in een array in de local storage

        if (notNull(theArray)) {
            theArray.push(faseObject);
            localStorage.setItem('allFases', JSON.stringify(theArray));
        } else {
            var theFirstArray = [];
            theFirstArray.push(faseObject);
            localStorage.setItem('allFases', JSON.stringify(theFirstArray));
        }

        function notNull(x) {
            if (x == null) {
                return false;
            } else {
                return true;
            }
        }

    });

    function objectVanFase() {

        var faseKaartjes = {}

        $(".fase").each(function (faseColumn) { // 

            var columnId = this.id;
            var order = $(this).sortable('toArray'); // .sortable() heeft zijn eigen array maker

            if (columnId == "fase-column1") { // voor de correcte benaming vd arrays ...
                faseKaartjes.column1 = order;
            } else if (columnId == "fase-column2") {
                faseKaartjes.column2 = order;
            } else if (columnId == "fase-column3") {
                faseKaartjes.column3 = order;
            } else if (columnId == "fase-column4") {
                faseKaartjes.column4 = order;
            }
        });
        return faseKaartjes;
    }


});