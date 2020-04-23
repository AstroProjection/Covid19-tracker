import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
import { fetchCountryList } from "../../api";
import styles from "./CountryDropdown.module.css";

const CountryDropdown = ({ countryChange }) => {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setCountryList(await fetchCountryList());
    };

    fetchCountries();
  }, []);

  return (
    <FormControl className={styles.form}>
      <InputLabel>Select Country:</InputLabel>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          countryChange(e.target.value);
        }}
      >
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
