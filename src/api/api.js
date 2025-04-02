import axios from "axios";

const API = "https://api.unsplash.com/";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getRandomPhoto() {
  const res = await axios.get(API + "photos/random/", {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
    },
    params: {
      orientation: "landscape",
    },
  });
  return res;
}
