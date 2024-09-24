$(document).ready(function() {
    //alert(window.location.pathname);
    var htmlBody = document.getElementById('');
    var hash = window.location.pathname.split('/visual17/')[1];
    if (hash.length == 32) {
        alert("valid hash");
    } else {
        alert("bad hash");
    }
});
