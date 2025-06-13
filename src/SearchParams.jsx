import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Result from "./Results";

const ANIMALS = ["dog", "cat", "bird", "rabbit", "reptile"];

const SearchParams = () => {
  console.log("My Search Params Component Rendered");
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  // making using of customs hooks
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    fetchPets();
  }, []);

  // Res ==> to fetch all the available pets from the external api.
  async function fetchPets() {
    try {
        const res = await fetch(
            `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
             );
        const json = await res.json();
        setPets(json.pets);
        } catch (error) {
            console.error("Failed to fetch pets:", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchPets();
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            disabled={!breeds.length}
          >
            <option />
            {breeds.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button onClick={(e) => handleLocation(e)}>Submit</button>
      </form>

      <Result pets={pets} />
    </div>
  );
};
export default SearchParams;
