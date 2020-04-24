import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";
const Chart = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchDailyData();
      setDailyData(fetchedData);
    };
    fetchAPI();
  }, [country]);

  const LineChart =
    dailyData.length !== 0 ? (
      <Line
        className={styles.chart}
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#0033FF",
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
  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [confirmed.value, recovered.value, deaths.value],
            // label: "People",
            backgroundColor: [
              "rgba(0,100,255,0.7)",
              "rgba(0,255,33,0.7)",
              "rgba(255,33,0,0.7)",
            ],
          },
        ],
      }}
      options={{
        title: {
          text: `Current State in ${country}`,
          display: true,
        },
        legend: {
          display: false,
        },
        maintainAspectRatio: true,
      }}
      height={200}
    />
  ) : null;

  // console.log(LineChart);

  return (
    <div className={styles.container}>
      {country && country !== "-" ? BarChart : LineChart}
    </div>
  );
};

export default Chart;
