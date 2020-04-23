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
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryDropdown />
        <Chart data={data} />
      </div>
    );
  }
}

export default App;
