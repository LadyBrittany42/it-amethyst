$(document).ready(function(){
    
$(#basicform).validate({
    rules: {
        FirstName: {
            required: true
    }
LastName: {
    required: true
}
Email: {
    required: true
    email: true
}
Birthday: {
    required: true
}
Height: {
    required: true
}
Weight: {
    required: true
}
PhoneNumber: {
    required: true
}
MaritalStatus: {
    required: true 
}
Address: {
    required: true 
}
City: {
    required: true 
}
State: {
    required: true 
}
Zip: {
    required: true 
}
Medications: {
    required: true
}
}
    
    );
});