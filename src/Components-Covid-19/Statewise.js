import React, { useEffect } from 'react';

const Statewise = () =>{

    const getCovidData = async () =>{

        const res = await fetch('https://data.covid19india.org/csv/latest/state_wise.csv');
        const actualData = (await res).json();
        console.log(actualData);
    }

    
    useEffect(() =>{
        getCovidData();
    }, [])
    return(
        <>
            <h1>INDIA COVID-19 Dashboard</h1>
        </>
    );
}

export default Statewise;
