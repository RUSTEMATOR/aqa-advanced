async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people/14");
  const data = await response.json();
  const starships = data.starships;

  const starshipNames = await Promise.all(
    starships.map(async (starshipLink) => {
      const starshipResponse = await fetch(starshipLink);
      const starshipData = await starshipResponse.json();
      return starshipData.name;
    }),
  );
  console.log(starshipNames);
}

fetchData();
