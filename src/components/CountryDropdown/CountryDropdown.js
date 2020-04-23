import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
import { fetchCountryData } from "../../api";
import styles from "./CountryDropdown.module.css";

const CountryDropdown = () => {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setCountryList(await fetchCountryData());
    };

    fetchCountries();
  }, [countryList]);

  return (
    <FormControl className={styles.form}>
      <InputLabel>Select Country:</InputLabel>
      <NativeSelect>
        <option value="global">Global</option>
        {countryList.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryDropdown;
