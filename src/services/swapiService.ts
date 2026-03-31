import axios from "axios";

interface Person {
  name: string;
  gender: string;
}

export const fetchPerson = async (id: number): Promise<Person> => {
  const response = await axios.get<Person>(
    `https://swapi.info/api/people/${id}`,
  );
  return response.data;
};
