import React from 'react';
import "./styles/styles.css";
import SearchPhotos from ".src/search_sp"

export default function Splash() {
  return (
     <div className="splash">
      <div className="sp_container">
        <h1 className="sp_title">focus space</h1>        
        
        <SearchPhotos/>
      </div>
    </div>
    
  );
}