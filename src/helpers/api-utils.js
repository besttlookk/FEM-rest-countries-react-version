import axios from "axios";

export async function getAllCountries() {
  const { data } = await axios.get("https://restcountries.com/v2/all");
  return data;
}

export async function getCountryDetail(code) {
  const { data } = await axios.get(
    `https://restcountries.com/v2/alpha/${code}`
  );

  return data;
}
