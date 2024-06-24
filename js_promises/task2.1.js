fetch(`https://swapi.dev/api/people/14`)
  .then((response) => response.json())
  .then((data) => {
    const starships = data.starships;
    return Promise.all(
      starships.map((starshipLink) =>
        fetch(starshipLink).then((response) => response.json()),
      ),
    );
  })

  .then((starshipInfo) => {
    const starshipNames = starshipInfo.map((starship) => starship.name);
    console.log(starshipNames);
  })

  .catch((error) => {
    console.log(error);
  });
