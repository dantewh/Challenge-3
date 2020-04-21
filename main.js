window.onload = function myFunction() {
    document.getElementsByClassName('icons')[0].style.visibility = 'hidden';
    
    
    
};


fetch('http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=Amsterdam&callback=?', {
    
})
    .then(res => res.json())

    .then(data => document.getElementById('windkmh').innerHTML = (data['liveweer'][0]['windkmh']))



fetch('http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=Amsterdam&callback=?', {
    
})
    .then(res => res.json())

    .then(data => document.getElementById('windr').innerHTML = (data['liveweer'][0]['windr']))




