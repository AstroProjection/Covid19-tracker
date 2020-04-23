import axios from "axios";

const apiURL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let pURL = apiURL;
  if (country) {
    pURL = `${apiURL}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(pURL);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${apiURL}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountryList = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${apiURL}/countries`);
    return countries.map((country) => {
      return country.name;
    });
  } catch (err) {
    console.log(err);
  }
};
