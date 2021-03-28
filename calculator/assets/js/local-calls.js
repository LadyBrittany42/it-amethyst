function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("addition").checked) {
            operator = document.getElementById("addition").value;
        }
        if (document.getElementById("subtraction").checked) {
            operator = document.getElementById("subtraction").value;
        }
        if (document.getElementById("multiplication").checked) {
            operator = document.getElementById("multiplication").value;
        }
        if (document.getElementById("division").checked) {
            operator = document.getElementById("division").value;
        }
        var result;
        
        if (operator == "addition") {
            result = (operand1fp + operand2fp);
        }
        
         if (operator == "subtraction") {
            result = (operand1fp - operand2fp);
        }
        
         if (operator == "multiplication") {
            result = (operand1fp * operand2fp);
        }
        
         if (operator == "division") {
            result = (operand1fp / operand2fp);
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    
    document.getElementById("addition").checked = false;
    document.getElementById("subtraction").checked = false;
    document.getElementById("multiplication").checked = false;
    document.getElementById("division").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});
