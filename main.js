window.onload = function myFunction() {
    document.getElementsByClassName('icons')[0].style.visibility = 'hidden';
};


fetch('http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=Amsterdam&callback=?', {
    
})
    .then(res => res.json())

    .then(data => document.getElementById('windkmh').innerHTML = (data['liveweer'][0]['windkmh']))

//    .then(data => document.getElementById((data['liveweer'][0]['windkmh']))[0].style.visibility = 'hidden'; )

