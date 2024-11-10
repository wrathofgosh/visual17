$(document).ready(function() {
    //alert(window.location.pathname);
    var htmlBody = document.getElementById('');
    var hash = window.location.pathname.split('/visual17/')[1];
    if (hash.length == 32) {
        fetch("https://www.17lands.com/card_tiers/data/" + hash)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
             })
            .then(data => {
                //console.log(data);
                for (let i = 0; i < data.length; i++) {
                    console.log(`${i}: ${data.tier}. ${data.color}. ${data.url}`);
                } 
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert("bad hash");
    }
});
