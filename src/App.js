import React from "react";
import { Cards, Chart, CountryDropdown } from "./components";
import { fetchData } from "./api";

import covidImage from "./images/covid19.png";

import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    try {
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.covidImage}
          src={covidImage}
          alt="COVID-19 image"
        />
        <Cards data={data} />
        <CountryDropdown countryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
