import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

export default function useBreedList(animal) {

  const fetchBreeds = async () => {
    const response = await axios.get(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    return response.data.breeds || [];
  };

  const { data = [], status } = useQuery({
    queryKey:["breeds", animal],
    queryFn: fetchBreeds,
  });

  return [data, status];
}



















//import { useState, useEffect } from "react";

//export default function useBreedList(animal) {
//  const [breedList, setBreedList] = useState([]);
//  const [status, setStatus] = useState("unloaded");


//  useEffect(() => {
//    if (!animal) {
//      setBreedList([]);
//    } else {
//      requestBreedList();
//    }
//
//    async function requestBreedList() {
//      setBreedList([]);
//      setStatus("loading");
//      const res = await axios.get(
//        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//      );
//      const json = await res.json();
//      setBreedList(json.breeds || []);
//      setStatus("loaded");
//    }
//  }, [animal]);

//  return [data, status];
//}

