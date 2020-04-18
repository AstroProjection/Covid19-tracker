import React from "react";
import "./App.module.css";
import { Cards, Chart, CountryDropdown } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    // console.log(fetchedData);
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <Chart />
        <CountryDropdown />
      </div>
    );
  }
}

export default App;
