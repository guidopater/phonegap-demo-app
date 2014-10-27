$(function() {
  /*setTimeout(hideSplash, 3000);*/
});

function hideSplash() {
  $.mobile.changePage("#accounts", "fade");
}

function saveContact() {
    alert("save contact");

    // search contact on name or new
    var options = new ContactFindOptions();
    options.filter = "Guido Pater";
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onContactSearchSucces, onContactSearchError, options);
}

    function onDeviceReady() {
        // find all contacts with 'Bob' in any name field
        var options = new ContactFindOptions();
        options.filter="Bob"; 
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }

    // onSuccess: Get a snapshot of the current contacts
    //
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        alert('onError!');
    }