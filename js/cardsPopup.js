console.log("script linked");


$("#kennisverwerving").on("click", function () {
    $.ajax({
        url: "data/Data.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $("#popupCard.form").css("display", "block");
        $('#popupCard').empty();
        var Kennisverwerving = data.Kennisverwerving;
        printCard(Kennisverwerving);
    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});


$("#productie").on("click", function () {
    $.ajax({
        url: "data/Data.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $("#popupCard.form").css("display", "block");
        $('#popupCard').empty();
        var productie = data.productie;
        printCard(productie);
        
    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});


$("#samenwerking").on("click", function () {
    $.ajax({
        url: "data/Data.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $("#popupCard.form").css("display", "block");
        $('#popupCard').empty();
        var samenwerking = data.samenwerking;
        printCard(samenwerking);
        
    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});


$("#discussie").on("click", function () {
    $.ajax({
        url: "data/Data.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $("#popupCard.form").css("display", "block");
        $('#popupCard').empty();
        var discussie = data.discussie;
        printCard(discussie);
        
    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});


$("#onderzoek").on("click", function () {
    $.ajax({
        url: "data/Data.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $("#popupCard.form").css("display", "block");
        $('#popupCard').empty();
        var onderzoek = data.onderzoek;
        printCard(onderzoek);
        
    }).fail(function (err1, err2) {
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });
});


$("#praktijk").on("click", function () {
    $.ajax({
        url: "data/Data.json",
        method: 'GET',
        dataType: "json"
    }).done(function (data) {
        $("#popupCard.form").css("display", "block");
        $('#popupCard').empty();
        var praktijk = data.praktijk;
        printCard(praktijk);
        
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
        checkbox.attr('id', "check" + data.contact[b]);

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
        checkbox.attr('id', "check" + data.digitaal[b]);

        var tekstCheck = $('<label>').text(data.digitaal[b]);

        var br = $('<br>');

        $(tekstCheck).prepend(checkbox);
        $('#rightDiv').append(tekstCheck);
        $('#rightDiv').append(br);
    }

    /*  var Description = $('<p>').text(data.description);
      $('#popupCard').append(Description);*/

};
