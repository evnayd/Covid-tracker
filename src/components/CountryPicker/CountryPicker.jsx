
import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@mui/material';

import { fetchCountries  } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries( await fetchCountries());
        }
        fetchAPI ();   
   },[ setFetchedCountries ]);

    
    return (
       <FormControl className={styles.formControl}>
        <NativeSelect defaultValue='' onChange={(e) => {handleCountryChange(e.target.value)}}>
            <option value="">Global</option>
           
            {fetchedCountries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
            
        </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker;