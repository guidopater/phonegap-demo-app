$(function() {
  /*setTimeout(hideSplash, 3000);*/
});

function saveContact() {
    var options = new ContactFindOptions();
    options.filter = "Guido Pater";  //just it's an example. Looking for id 20.
    var fields = ["displayName", "name"];
    var contact;   
    navigator.contacts.find(fields, function(contacts) {
        var tContactName = new ContactName();
        tContactName.givenName = 'Guido';
        tContactName.lastName = 'Pater';

        if (contacts.length == 0)  {
            contact = navigator.contacts.create();
            contact.note = "Added by PhoneGap Demo App";    
        } else {
            contact = contacts[0];
        }

        contact.name = tContactName;    
        contact.phoneNumbers[0] = new ContactField('work', '+31616154818',true);
        contact.save(function(contact) {
            navigator.notification.alert('Saved sucessfully!!!',function(){},'Title');
        }, function(contactError) {
            navigator.notification.alert('Error contact save: '+contactError.code,function(){},'Title');
        });
    }, function(contactError) {
       navigator.notification.alert('Error contact find: '+contactError.code,function(){},'Title');
    }, options);
}