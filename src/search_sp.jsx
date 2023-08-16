import React, {useState} from "react";
import { createApi } from 'unsplash-js';
import Draggable, { DraggableCore } from "react-draggable";
const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;


const unsplash = createApi({
accessKey: 'ltSzFlqYETw_n4qPSUs2f_uHjMShHmNdqNgMoPcHOvY',
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
    const photo = result.response.results//.results[0].urls.full;
    //console.log(photo)
    console.log(pics)
  
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
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.thumb}
                width="50%"
                height="50%"
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
