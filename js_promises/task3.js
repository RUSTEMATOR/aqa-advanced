


async function residenstOfPlanets(id){
  try{
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await response.json();
    const planets = data.planets; 

    const residents = await Promise.all(planets.map(async (planetLink) => {
      const planetResponse = await fetch(planetLink)
      const planetData = await planetResponse.json();
      const residents = await Promise.all(planetData.residents.map(async (residentLink) => {
      const residentResponse = await fetch(residentLink);
      const residentData = await residentResponse.json();
      return residentData.name;
    }))

      return {
        planetName: planetData.name,
        residents: residents
      }
  }))

   console.log(residents);
   return residents;
   
  }catch(error){
    console.log(error);
  }
}


residenstOfPlanets(3)

  