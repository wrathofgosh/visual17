$(document).ready(function() {
    //alert(window.location.pathname);
    var htmlBody = document.getElementById('');
    var hash = window.location.pathname.split('/visual17/')[1];
    if (hash.length == 32) {
        fetch('https://www.17lands.com/card_tiers/data/' + hash)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                 }
                return response.json();  // Assuming the response is JSON
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    } else {
        alert("bad hash");
    }
});
