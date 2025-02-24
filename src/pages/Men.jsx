import React from "react";
import Menspl from "./Menspl";
import image from '../assets/bannerImages/b2.jpg'

function App() {
  return (
    <div className="App">
     <div>
      <img src={image} alt="" className="h-[350px] w-full object-cover object-center" />
     </div>
     <Menspl />
    </div>
  );
}

export default App;
