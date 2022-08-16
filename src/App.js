import './index.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import DisplayAnime from './DisplayAnime';
import AboutAnime from './AboutAnime';
import SearchAnime from './SearchAnime';
import Form from './Form'
import NextPage from './NextPage';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";

// TODO: add firebase to add to favourites and watched later 
// TODO: add more styling and a background

function App() {
  const [anime, setAnime] = useState([]);
  const [nextPage, setNextPage] = useState(1);
    
    return (
      <div>
        <h1>Anime Finder</h1>
        
        <Form />

        <Routes>
          <Route path='/' element={ <DisplayAnime anime={anime} setAnime={setAnime} nextPage={nextPage} setNextPage={setNextPage} /> } />
          <Route path='/anime/:animeId' element={ <AboutAnime /> }/>
          <Route path='/search/:animeSearched' element={ <SearchAnime /> } />
          <Route path='/page/:page' element={ <NextPage anime={anime} nextPage={nextPage} setNextPage={setNextPage} setAnime={setAnime} /> }/>
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

//     • have a dropdown menu with different genre options populated from the api

// Stretch Goals

// Have users be able to favourite them and add that list to firebase
//     • have a button when clicked add the data of that api to firebase and display that in the favourites page / category
//     • do the same thing but for the already watched category
//     •  if an anime is in the already watched list dont add it when searching for a new genre / anime

// button to view the most suggested animes 

// filter by score
  // have a button to filter them on the page by highest score

// have a login or username to have specific lists
//     • add a node that has the username and display their data into already watched / favourite