import React, {useState} from "react";
import { createApi } from 'unsplash-js';
import Draggable, { DraggableCore } from "react-draggable";

// Define your constant variable with the URL
const backgroundImageURL = "https://images.unsplash.com/photo-1682685797857-97de838c192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";



const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
const unsplash = createApi({
accessKey: unsplashApiKey,
  });


export default function SearchPhotos() {
 
  
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    
  e.preventDefault()
    unsplash.search.getPhotos({
  query: query,
  per_page: 9,
  page: 1,
  orientation: 'landscape',
  
}).then(result  => {

    switch (result.type) {
    case 'error':
      console.log('error occurred: ', result.errors[0]);
    case 'success':
    setPics(result.response.results)
    const photo = result.response.results
    //console.log(pics)
  
    }
})
  };

  return (
     <div className="Drag">
           <Draggable> 
             <div>
               
                 <header></header>
    <>
    
    
  <form className="sp_form " onSubmit={searchPhotos}> 
        <label className="sp_label" htmlFor="query"> 
          {" "}
          🧙‍♂️
        </label>
        <input
          type="text"
          name="query"
          className="sp_input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
    onChange={(e) => setQuery(e.target.value)}
        />
        <button type="sp_submit" className="sp_button">
          Search
        </button>
   
      </form>
    
      <div className="sp_card-list">
   
      
 {
          pics.map((pic) => <div className="sp_card">
                   <img
                className="sp_card--image"
                alt={pic.alt_description}
                src={pic.urls.thumb}
                width="50%"
                height="50%"
                onClick={() => document.body.style.backgroundImage= `url('${pic.urls.regular}')`}
              ></img>
                   
                   
                   
                   
                   </div>)
        }
      </div>
  

             </>
               </div>
      </Draggable>
    </div>  
  );
}
