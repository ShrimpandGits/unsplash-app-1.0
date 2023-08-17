import React from 'react';
import "./styles.css";
import SearchPhotos from "./search_sp.jsx"

export default function Splash() {
  return (
     <div className="splash">
      <div className="sp_container">
        <h1 className="sp_title">image search</h1>        
        
        <SearchPhotos/>
      </div>
    </div>
    
  );
}