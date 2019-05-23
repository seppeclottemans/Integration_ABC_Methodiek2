console.log("script linked");


$("#buttonOne").on("click", function () {
    $.ajax({
        url: "cards.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $(".form").css("display", "block");
        $('#popupCard').empty();
        var productie = data.productie;
        printCard(productie);
    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});


$("#buttonTwo").on("click", function () {
    $.ajax({
        url: "cards.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $(".form").css("display", "block");
        $('#popupCard').empty();
        var Kennisverwerving = data.Kennisverwerving;
        printCard(Kennisverwerving);
    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});


var popupCard = document.getElementById("popupCard");
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
        checkbox.attr('id', "check" + data.contact[b]);

        var tekstCheck = $('<label>').text(data.contact[b]);

        var br = $('<br>');

        $('#leftDiv').append(checkbox);
        $('#leftDiv').append(tekstCheck);
        $('#leftDiv').append(br);
    }

    var Digitaal = $('<h3>').text("Digitaal");
    $('#rightDiv').append(Digitaal);

    for (var b in data.digitaal) {

        var checkbox = $('<input type="checkbox">');
        checkbox.attr('id', "check" + data.digitaal[b]);

        var tekstCheck = $('<label>').text(data.digitaal[b]);

        var br = $('<br>');

        $('#rightDiv').append(checkbox);
        $('#rightDiv').append(tekstCheck);
        $('#rightDiv').append(br);
    }

    /*  var Description = $('<p>').text(data.description);
      $('#popupCard').append(Description);*/

};
