
import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@mui/material';

import { fetchCountries  } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries( await fetchCountries());
        }
        fetchAPI ();   
   },[ setFetchedCountries ]);
     


    console.log('fetchedCountries', fetchedCountries)
    

    return (
       <FormControl className={styles.formControl}>
        <NativeSelect>
            <option value="global">Global</option>
           
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country.name}</option>)}
            
        </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker;