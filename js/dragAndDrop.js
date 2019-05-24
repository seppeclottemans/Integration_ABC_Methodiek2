$(function () {
    console.log('script loaded');

    $(function () {

        $(".column").sortable({
            connectWith: ".column",
            cancel: ".portlet-toggle",
            placeholder: "kaartjes-placeholder ui-corner-all",
            stop: function (event, ui) {

                var kaartjeDiv = ui.item[0];

                nieuweDiv(event, kaartjeDiv);
                //                function(event,ui){
                //                console.log('stop');
                //                console.log(event);
                //            }
            }
        });

        function nieuweDiv(event, itemClass) {
            var aantalStartKaartjes = $(".kaartje-start .portlet").length;

            console.log(aantalStartKaartjes);
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

        $(".portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<img src='../nav-images/cancel-cross.svg' alt='cancel cross' class='ui-icon portlet-toggle'></img>")


        $(".ui-icon").on("click", function () {

            var deHeader = $(this).parent();
            var deDiv = deHeader.parent();
            console.log('ye');
            
            $(deDiv).remove();

        });
    });



});
