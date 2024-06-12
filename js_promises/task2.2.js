


async function fetchData() {
    const response = await fetch('swapi.dev/api/people/14/');
    const data = await response.json();
    console.log(data.starships); 
}

fetchData();