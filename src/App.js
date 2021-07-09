import React, { useEffect, useState } from "react";
import Results from "./components/Results";
import "./App.css";

// Display the user’s IP address when he arrives on the page
// Store the key in a .env file

const App = () => {
    const [results, setResults] = useState([]);
    const [infoFromFetch, setInfoFromFetch] = useState([]);

    useEffect(() => {
        fetch(
            "https://geo.ipify.org/api/v1?apiKey=at_MDF5VIUBw35fKD2uotnaxRQbQpHnJ&ipAddress=8.8.8.8"
        )
            .then((res) => res.json())
            .then(({ ip, ...rest }) => {
                setResults(ip);
                setInfoFromFetch(rest);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Results results={results} />
        </div>
    );
};

export default App;
