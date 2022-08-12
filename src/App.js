import './index.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import DisplayAnime from './DisplayAnime';
import Form from './Form'

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

// have a login or username to have specific lists
//     • add a node that has the username and display their data into already watched / favourite

function App() {
  const [anime, setAnime] = useState([]);

  useEffect( ()=> {
    axios({
      url: 'https://api.jikan.moe/v4/anime',
      // url: 'https://api.jikan.moe/v4/top/anime',
      method: 'GET',
      dataResponse: 'json',
      params: {
        // page: 3,
        q: '',
        sfw: false
      }
    }) .then((res) => {
      const results = res.data.data;
      setAnime(results);
    })
  }, [])

  return (
    <div className="App">
      <h1>Anime Finder</h1>
      <Form />
      <DisplayAnime anime={anime}/>
    </div>
  );
}

export default App;
