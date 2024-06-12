


fetch('https://swapi.dev/api/planets/?page=1')
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
    })

