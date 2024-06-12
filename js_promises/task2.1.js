



fetch ('https://swapi.dev/api/people/14/')
    .then(response => response.json())
    .then(data => {
         console.log(data.starships);
     })
     .catch(error => {
         console.log(error);
     })


async function fetchData() {
    const response = await fetch('swapi.dev/api/people/14/');
    const data = await response.json();
    console.log(data.starships); 
}

fetchData();