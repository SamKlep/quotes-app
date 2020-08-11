import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { Jumbotron } from "react-bootstrap";
import NewQuote from "./components/NewQuote";

function App() {
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    Axios({
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setResponseData, responseData]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Qutoes API</h1>
      </header>
      <br />
      {responseData && (
        <div className='container'>
          <Jumbotron>
            <blockquote>
              "{responseData && responseData.content}"
              <br />
              <br />
              <small>
                {responseData &&
                  responseData.originator &&
                  responseData.originator.name}
              </small>
            </blockquote>
          </Jumbotron>
        </div>
      )}
      <br />
      <br />
      <NewQuote />
    </div>
  );
}

export default App;
