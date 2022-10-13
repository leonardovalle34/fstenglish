import React from 'react'
import Router from './routes';
import "./index.css"
import {Helmet} from "react-helmet"

function App() {
  return (
    <div className="App">
      <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fast English</title>
                <link rel="canonical" href="http://fstenglish.netlify.app" />
            </Helmet>
        </div>
      <Router/>
    </div>
  );
}

export default App;
