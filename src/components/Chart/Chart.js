import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";
const Chart = ({ data: { confirmed, recovered, deaths } }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchDailyData();
      setDailyData(fetchedData);
      // console.log(fetchedData);
    };
    fetchAPI();
  }, []);

  const LineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#3333FF",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba( 255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : (
      console.log("empty")
    );

  // console.log(LineChart);
  return <div className={styles.container}>{LineChart}</div>;
};

export default Chart;
