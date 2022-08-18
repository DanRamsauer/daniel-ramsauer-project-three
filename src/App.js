import './index.css';
import { useState } from 'react';
import DisplayAnime from './DisplayAnime';
import AboutAnime from './AboutAnime';
import SearchAnime from './SearchAnime';
import Form from './Form'
import ErrorPage from './ErrorPage';
import Favourites from './Favourites';
import { Routes, Route } from 'react-router-dom';
import firebase from "./firebase";
import { getDatabase, ref, push } from "firebase/database";

function App() {
  const [ anime, setAnime ] = useState([]);
  const [ nextPage, setNextPage ] = useState(1);
  const [ added, setAdded ] = useState(false);
  
  const addingAnime = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    push(dbRef, anime);

    setAdded(true);
  }
    
    return (
      <div>
        <h1>Anime Finder</h1>

        <h3>Click the images for more information on the anime</h3>
        
        <Form />

        <Routes>
          <Route path='/' element={ <DisplayAnime anime={anime} setAnime={setAnime} nextPage={nextPage} setNextPage={setNextPage} /> } />
          <Route path='/anime/:animeId' element={ <AboutAnime addingAnime={addingAnime} anime={anime} setAnime={setAnime} added={added} setAdded={setAdded} /> }/>
          <Route path='/search/:animeSearched' element={ <SearchAnime /> } />
          <Route path='/watch/:later' element={ <Favourites /> } />
          <Route path='*' element={ <ErrorPage /> } />
        </Routes>
    </div>
  );
}

export default App;

// Pseudo Code
// MVP
// Make an api call to an anime api
//     • as default display the default api call animes and be able to filter through them
//     • have a search bar to search different animes

// when the user searches an anime
//     • grab the selected value from the search bar and input that into the params q from the api and display the anime image title and description to the page

// Stretch Goals

// Have users be able to favourite them and add that list to firebase
//     • have a button when clicked add the data of that api to firebase and display that in the favourites page / category
//     • do the same thing but for the already watched category
//     •  if an anime is in the already watched list dont add it when searching for a new genre / anime

// have a login or username to have specific lists
//     • add a node that has the username and display their data into already watched / favourite