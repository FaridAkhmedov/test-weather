import ky from "ky";

export default ky.create({
  prefixUrl: process.env.REACT_APP_API_URL,
  mode: "cors"
});

export const KEMEROVO = "55.388488,86.098691?lang=ru&units=auto";
