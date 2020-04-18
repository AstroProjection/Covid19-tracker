import axios from "axios";

const apiURL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const response = await axios.get(apiURL);

    return response;
  } catch (error) {}
};
