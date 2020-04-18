import React from "react";
import "./App.module.css";
import { Cards, Chart, CountryDropdown } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  render() {
    return (
      <div className="container">
        <Cards />
        <Chart />
        <CountryDropdown />
      </div>
    );
  }
}

export default App;
