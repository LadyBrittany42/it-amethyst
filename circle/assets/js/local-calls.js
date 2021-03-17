$( "#CircleForm" ).validate({

});

$( "#CircleForm" ).validate({
});
        
        function calculate() { // floating point value of leg1
                 
            // if the form is valid, then make the calculations
            if ($("#CircleForm").valid()) {
                
                 document.getElementById("diameter").innerHTML = "";

                 var radius; // string representation of the leg1
                 var radiusfp;
                 var diameter;  // floating point hypotenuse
                var circumference;
                var area;

                 // read in the legs as a string
                 radius = document.getElementById("radius").value;
                

                 // Convert numbers from strings to Floating Point
                 radiusfp = parseFloat( radius ); 
                 

                 // calculate the hypotenuse
                 diameter = calcDiameter(radiusfp);
                 circumference= calcCircumference(radiusfp);
                 area = calcArea(radiusfp);

                 // display the hypotenuse
                 document.getElementById("diameter").innerHTML = diameter.toString();
                 document.getElementById("circumference").innerHTML = circumference.toString();
                 document.getElementById("area").innerHTML = area.toString();
            }
        }

          function calcDiameter (radiusvalue)
          // returns hypotenuse of a right triangle
          // square root of leg1 squared plus leg2 squared
          {
              return 2 * radiusvalue
          }
          function calcCircumference (radiusvalue)
          // returns hypotenuse of a right triangle
          // square root of leg1 squared plus leg2 squared
          {
              return 2 * radiusvalue * Math.PI
          }
          function calcArea (radiusvalue)
          // returns hypotenuse of a right triangle
          // square root of leg1 squared plus leg2 squared
          {
              return radiusvalue * radiusvalue * Math.PI
          }
          function clearForm()
        {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            
            document.getElementById("diameter").innerHTML = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
        }