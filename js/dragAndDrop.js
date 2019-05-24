$(function () {

    $(function () {

        $(".column").sortable({
            connectWith: ".column",
            cancel: ".portlet-toggle",
            placeholder: "kaartjes-placeholder ui-corner-all",
            //            update: function(event, ui) {
            //    var changedList = this.id;
            //    var order = $(this).sortable('toArray');
            //    var positions = order.join(';');
            //
            //    console.log({
            //      id: changedList,
            //      positions: positions
            //    });
            //  },
            stop: function (event, ui) {

                var kaartjeDiv = ui.item[0];

                nieuweDiv(event, kaartjeDiv);
                //            function(event,ui){
                //                console.log(event);
                //            }
            }
        });

        function nieuweDiv(event, itemClass) {
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


        $(".klaarButton").on('click', function () {
            var faseColumn = $(".column");
            console.log(faseColumn);
            var rownumber = 1;
            $(".fase").each(function (faseColumn) {
                var columnId = this.id;
                var order = $(this).sortable('toArray');
                var positions = order.join(';');
                var weergave = {
                    id: columnId,
                    positions: positions
                };
                localStorage.setItem('weergave' + rownumber, JSON.stringify(weergave));
                console.log(weergave);
                rownumber++;
            });

        });

    });


});
