$(document.body).on('click', '.portlet', function () {
    var thisElement = this;
    $.ajax({
        url: "Data/Data.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        var role = $(thisElement).data("role");
        $("#popupCard.form").css("display", "block");
        $('#popupCard').empty();
        var cardName = data[role];
        printCard(cardName);

    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});




window.onclick = function (event) {


    if (event.target == popupCard) {
        popupCard.style.display = "none";
    }

}


function printCard(data) {
    var color = data.color;

    var popupContent = $('<div id="popupContent">');
    $('#popupCard').append(popupContent);

    $("#popupContent").css("background-color", color);

    var tekst = $('<h1>').text(data.name);
    $(popupContent).append(tekst);

    var leftDiv = $('<div id="leftDiv">');
    $(popupContent).append(leftDiv);

    var rightDiv = $('<div id="rightDiv">');
    $(popupContent).append(rightDiv);

    var Contact = $('<h3>').text("Contact");
    $('#leftDiv').append(Contact);

    for (var b in data.contact) {
        var checkbox = $('<input type="checkbox">');
        var idCheckboxString = data.contact[b];
        $('idCheckboxString').text();
        idCheckboxString = idCheckboxString.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
        checkbox.attr('id', "check" + idCheckboxString);
        checkbox.attr('class', "check");

        var tekstCheck = $('<label>').text(data.contact[b]);

        var br = $('<br>');
        $(tekstCheck).prepend(checkbox);
        $('#leftDiv').append(tekstCheck);
        $('#leftDiv').append(br);
    }

    var Digitaal = $('<h3>').text("Digitaal");
    $('#rightDiv').append(Digitaal);

    for (var b in data.digitaal) {

        var checkbox = $('<input type="checkbox">');
        var idCheckboxString = data.digitaal[b];
        $('idCheckboxString').text();
        idCheckboxString = idCheckboxString.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
        checkbox.attr('id', "check" + idCheckboxString);
        checkbox.attr('class', "check");

        var tekstCheck = $('<label>').text(data.digitaal[b]);

        var br = $('<br>');
        $(tekstCheck).prepend(checkbox);
        $('#rightDiv').append(tekstCheck);
        $('#rightDiv').append(br);;
    }
    readChecked = function () {
        var numberOfChecked = $("input:checked").length;
        var checked = $(this).attr('id');
        if ($('#' + checked).is(":checked")) {
            localStorage.setItem("checked" + this.id, JSON.stringify(checked));
        } else {
            localStorage.removeItem("checked" + this.id);
        }

    };
    $("input[type=checkbox]").on("click", readChecked);

    /*  var Description = $('<p>').text(data.description);
      $('#popupCard').append(Description);*/

};
