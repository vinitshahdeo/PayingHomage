import React, {useEffect} from 'react';
import trees from '../../assets/trees.json';
import {GoogleSpreadsheet} from 'google-spreadsheet'

export default function useBanner() {

    const fetchTrees = async () => {
        const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);
        
    }

    useEffect(() => {
        
    })

    function getTrees() {
        // TODO: Fetch data from google API and update the number of trees for the counter.
        const year = new Date().getFullYear();
        return 1000;
        // return trees.filter((t) => t.year <= year).map((t) => t.trees).reduce((result, value) => result + value);
    }

    return {
        getTrees,
    }
}