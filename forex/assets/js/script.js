function ShowData() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var BaseCurrency = document.getElementById("basecurrency").value;
        var ConvertCurrency = document.getElementById("convertcurrency").value;
        var FromDate = document.getElementById("fromdate").value;
        var ToDate = document.getElementById("todate").value;
        // var StockSymbol = document.getElementById("currency").value;
        var apiKey = "0X4A8VH9tvEnbyj2ALivpUcHpQW1D5FR"

        /* URL for AJAX Call */
        /*var myURL = https://api.polygon.io/v2/aggs/ticker/C:EURUSDGBP/range/1/day/
        2020-10-14/2020-10-14?unadjusted=true&sort=asc&limit=120&apiKey=0X4A8VH9tvEnbyj2ALivpUcHpQW1D5FR
*/
/* save this url because it works
       var myURL = "https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/2020-10-14/2020-10-18?unadjusted=true&sort=asc&limit=120&apiKey=0X4A8VH9tvEnbyj2ALivpUcHpQW1D5FR"
*/
       var myURL = "https://api.polygon.io/v2/aggs/ticker/C:" + BaseCurrency + ConvertCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=true&sort=asc&limit=120&apiKey=0X4A8VH9tvEnbyj2ALivpUcHpQW1D5FR"

        /* AJAX Method (POST or GET) */
        var myMethod = "GET";

        /* Make sure the document is ready */
        $(document).ready(function() { 

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod,
              url: myURL
            })

            /* AJAX complete - result is in msg */
            .done(function( msg2 ) {

                /* Your code to process the result goes here - 
                   display the returned message */
               /* Your code to process the result goes here  
                    display the returned message */
                var currencydate = [];
                var currencyvalue = [];

                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        currencyvalue[i] = msg2.results[i].c;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        currencydate[i] = tempdate.toLocaleDateString();
                    }
                }

                var currencyvaluetable = "";
                if (numdays > 0) {
                    currencyvaluetable = currencyvaluetable + "<table><caption>Currency Value</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        currencyvaluetable = currencyvaluetable + "<tr><td>" + currencydate[i] + "</td><td>" + currencyvalue[i] + "</td></tr>";
                    }
                    currencyvaluetable = currencyvaluetable + "</table>"
                    document.getElementById("CurrencyValueTable").innerHTML = currencyvaluetable;
                }
                

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": currencydate,
                        "datasets":[{"label":"Currency Close",
                        "data": currencyvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
                
            })
            
            /* AJAX complete with error - probably invalid stock ticker symbol */
            .fail(function( msg ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                alert("currency Not Found - Status: " + msg.status)
            });
        });
    }
}