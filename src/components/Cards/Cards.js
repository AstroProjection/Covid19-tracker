import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  // console.log({ confirmed, deaths, recovered, lastUpdate });
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              Confirmed Cases:
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.75}
                delay={0.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Real Date:{lastUpdate}
            </Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              Number of recovered cases:
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                delay={0.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Real Date:{lastUpdate}
            </Typography>
            <Typography variant="body2">Number of recovered cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              Deaths:
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                delay={0.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Real Date:{lastUpdate}
            </Typography>
            <Typography variant="body2">
              Number of deaths due to Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
