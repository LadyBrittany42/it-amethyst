function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    form.validate();
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var operand1 = document.getElementById("Operand1").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var fromunit;
        if (document.getElementById("fromcm").checked) {
            fromunit = document.getElementById("fromcm").value;
        }
        if (document.getElementById("fromm").checked) {
            fromunit = document.getElementById("fromm").value;
        }
        if (document.getElementById("fromkm").checked) {
            fromunit = document.getElementById("fromkm").value;
        }
        if (document.getElementById("fromin").checked) {
            fromunit = document.getElementById("fromin").value;
        }
         if (document.getElementById("fromft").checked) {
            fromunit = document.getElementById("fromft").value;
        }
         if (document.getElementById("fromyd").checked) {
            fromunit = document.getElementById("fromyd").value;
        }
         if (document.getElementById("frommi").checked) {
            fromunit = document.getElementById("frommi").value;
        }
        
          var tounit;
        if (document.getElementById("tocm").checked) {
            tounit = document.getElementById("tocm").value;
        }
        if (document.getElementById("tom").checked) {
            tounit = document.getElementById("tom").value;
        }
        if (document.getElementById("tokm").checked) {
            tounit = document.getElementById("tokm").value;
        }
        if (document.getElementById("toin").checked) {
            tounit = document.getElementById("toin").value;
        }
         if (document.getElementById("toft").checked) {
            tounit = document.getElementById("toft").value;
        }
         if (document.getElementById("toyd").checked) {
           tounit = document.getElementById("toyd").value;
        }
         if (document.getElementById("tomi").checked) {
            tounit = document.getElementById("tomi").value;
        }
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";
        
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the names required by the AJAX page  */
        var myData = {};
        myData.FromValue = operand1;
        myData.FromUnit = fromunit;
        myData.ToUnit = tounit;

        
        /* Make sure document is ready */
        $(document).ready(function() {

            /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("Result").innerHTML = msg;
            });
        });
    }
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    
    document.getElementById("fromcm").checked = false;
    document.getElementById("fromm").checked = false;
    document.getElementById("fromkm").checked = false;
    document.getElementById("fromin").checked = false;
    document.getElementById("fromft").checked = false;
    document.getElementById("fromyd").checked = false;
    document.getElementById("frommi").checked = false;
    document.getElementById("fromuniterror").innerHTML = "";
 
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("tocm").checked = false;
    document.getElementById("tom").checked = false;
    document.getElementById("tokm").checked = false;
    document.getElementById("toin").checked = false;
    document.getElementById("toft").checked = false;
    document.getElementById("toyd").checked = false;
    document.getElementById("tomi").checked = false;
    document.getElementById("touniterror").innerHTML = "";
    
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});