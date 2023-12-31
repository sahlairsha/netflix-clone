
import NavBar from "./Components/NavBar/NavBar";
import { action,originals,trending,comedy,horror,romance,documentaries } from "./url";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import React from "react";
function App() {
  return (
    <div className="App">
       <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action}  title='Action' isSmall/>
      <RowPost url={trending}  title='Trending' isSmall/>
      <RowPost url={comedy}  title='Comedy' isSmall/>
      <RowPost url={horror}  title='Horror' isSmall/>
      <RowPost url={romance}  title='Romance' isSmall/>
      <RowPost url={documentaries}  title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
