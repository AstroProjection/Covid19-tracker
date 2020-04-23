import React from "react";
import "./App.module.css";
import { Cards, Chart, CountryDropdown } from "./components";
import { fetchData } from "./api";

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
      <div className="container">
        <Cards data={data} />
        <CountryDropdown countryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
