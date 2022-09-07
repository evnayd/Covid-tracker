import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {

     const {data: { confirmed, recovered, deaths,lastUpdate }} = await axios.get(changeableUrl);

     const modifiedData = {
     confirmed,
     recovered,
     deaths,
     lastUpdate,
     }
     return  modifiedData;
    }
    catch(error) {
       console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
      const {data} = await axios.get(`${url}/daily`);

      const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
        }
    ));
    return modifiedData;
     } catch(error) {

        console.log(error)

    }
}

export const fetchCountries = async() => {
    try {
        const response = await axios.get(`${url}/countries`);
        return response.data.countries

    } catch (error) {
    
    }
}

