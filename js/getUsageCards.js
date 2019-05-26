$(document).ready(function () {


    //GLobal array, which the usageData will be stored in
    var cardGebruik = [];

    //ajax call to local .json, containing the specific usage of certain modules
    $.ajax({
        url: './data/data.json',
        method: 'GET',
        dataType: 'JSON',
    }).done(function (data) {
        //console.log(data);
        printData(data);
    }).fail(function (a, b) {
        console.log('fail');
        console.log(a);
        console.log(b);
    }).always(function () {
        console.log('Always');
    });

    //looping through the data received from the ajax-call
    function printData(data) {
        var obj = data;
        //console.log(obj);

        for (var card in obj) {

            //Mike "DWD":
            //"card : discussie, onderzoek"
            //"obj[card] : object vqlue vqn discussie"
            var cardData = obj[card];

            //Push to global array - see line 6
            cardGebruik.push(cardData.gebruik);
        };
        console.log(cardGebruik);
        setCards(cardGebruik);
    };



    //Function to save the module usage to localStorage
    function setCards(cardData) {
        var gebruikData = cardData;
        if (localStorage.getItem("gebruik") !== null || localStorage.getItem("gebruik") !== "null") {

            //Clear the localStorage to get fresh results
            localStorage.clear("gebruik");

        }

        //Stringify the data for use in other scripts
        localStorage.setItem("gebruik", JSON.stringify(gebruikData));
    }

    //End function

});
