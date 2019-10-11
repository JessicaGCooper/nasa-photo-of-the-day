import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header"
import InfoBar from "./components/InfoBar";
import DescPanel from "./components/DescPanel";
import Photo from "./components/Photo";
import Footer from "./components/Footer"



function App(props) {
  
    const [parts, setParts] = useState("")
    
    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=Rb1p7Wph42s91BTrR2MWnLk663go2CDNX07yeag3')
            .then(response => {
                setParts(response.data);
            })
            .catch(error => {
                console.log("The data was not returned:", error)
            });
    }, []);
  
  return (
    <div className="App">
      <Header />
      <InfoBar parts1={parts} />
      <DescPanel parts1={parts}/>
      <Photo parts1={parts} />
      <Footer />
    </div>
  );
}

export default App;

