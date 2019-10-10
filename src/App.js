import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header"
import InfoBar from "./components/InfoBar";
import DescPanel from "./components/DescPanel/DescPanel";
import Photo from "./components/Photo";



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
      <footer>
        <h3 className="footer">Image &amp; Information Courtesy of NASA</h3>
      </footer>
    </div>
  );
}

export default App;


//https://api.nasa.gov/planetary/apod?api_key=Rb1p7Wph42s91BTrR2MWnLk663go2CDNX07yeag3

// data: {
// date: "2019-10-09"
// explanation: "Is this galaxy jumping through a giant ring of stars?  Probably not.  Although the precise dynamics behind the featured image is yet unclear, what is clear is that the pictured galaxy, NGC 7714, has been stretched and distorted by a recent collision with a neighboring galaxy. This smaller neighbor, NGC 7715, situated off to the left of the featured frame, is thought to have charged right through NGC 7714. Observations indicate that the golden ring pictured is composed of millions of older Sun-like stars that are likely co-moving with the interior bluer stars. In contrast, the bright center of NGC 7714 appears to be undergoing a burst of new star formation.  The featured image was captured by the  Hubble Space Telescope.  NGC 7714 is located about 130 million light years away toward the constellation of the Two Fish (Pisces).  The interactions between these galaxies likely started about 150 million years ago and should continue for several hundred million years more, after which a single central galaxy may result."
// hdurl: "https://apod.nasa.gov/apod/image/1910/Ngc7714_HubblePohl_2048.jpg"
// media_type: "image"
// service_version: "v1"
// title: "NGC 7714: Starburst after Galaxy Collision"
// url: "https://apod.nasa.gov/apod/image/1910/Ngc7714_HubblePohl_1080.jpg"
// }

