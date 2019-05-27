$(function () {
    // Titeling van de pagina 
    var Opleidingsonderdeel = localStorage.getItem('Opleidingsonderdeel');
    Opleidingsonderdeel = JSON.parse(Opleidingsonderdeel);

    var ingevuldOpleidingsonderdeel = $('<h1>').text(Opleidingsonderdeel);

    ingevuldOpleidingsonderdeel.attr('class', "title");
    $('header').prepend(ingevuldOpleidingsonderdeel);

    //fases opstellen...

        var allFasesArray = JSON.parse(localStorage.getItem('allFases'));


        for (var k = 0; k < 4; k++) {
            var fase = allFasesArray[k];
            var faseDoelstellingen = fase.doelstellingen;
            var faseTitel = fase.fase_id;
            var columnsArray = [allFasesArray[k].column1, allFasesArray[k].column2, allFasesArray[k].column3, allFasesArray[k].column4];

        var allFasesArray = JSON.parse(localStorage.getItem('allFases'));

        var divId = "#info" + k;
        var ingevuldeFaseTitel = $('<h3>')
            .text(faseTitel)
            .attr('id', "ingevuldweekBereik")
            .appendTo(divId);
        //doelstellingen...
        var ingevuldeFaseDoelstellingen = $('<p>')
            .text(faseDoelstellingen)
            .attr('id', "ingevuldweekBereik")
            .appendTo(divId);

        var columnId = '#' +k;

        for (var i = 0; i < 4; i++) {
            var column_kaartjes = [];
            column_kaartjes = columnsArray[i];

            var columnCounter = "lesplan_column" + i;

            var column = $('<div>')
                .attr('class', 'grid')
                .addClass('class', columnCounter);
            $(columnId).append(column);

            for (var j = 0; j < 4; j++) {
                var kaart = $('<div>')
                    .text(column_kaartjes[j])
                    .attr('class', column_kaartjes[j]);
                $(column).append(kaart);
            }
        }
    }
});