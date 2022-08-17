import firebase from "./firebase";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Favourites = () => {
    const [anime, setAnime] = useState([]);

    const removeAnime = (animeId) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${animeId}`);
    
        remove(dbRef);
      }

      useEffect(() => {
        const database = getDatabase(firebase);
    
        const dbRef = ref(database)
    
        onValue(dbRef, (response) =>{
    
          const newState = [];
          const animeData = response.val();
    
          for (let fbKey in animeData) {
            newState.push(
              {
                key: fbKey, 
                name: animeData[fbKey]
              }
            );
          }
          setAnime(newState);
        })
      }, [])

    return(
        <section>
            <Link className="link" to={'/'}>
                <h4>Home</h4>
            </Link>
            <section className="anime">
                { 
                    anime.map( (anime) => {
                            return(
                                <li className="container" key={anime.name.mal_id}>
                                    <Link className="link" to={`/anime/${anime.name.mal_id}`}>
                                        <img src={anime.name.images.jpg.image_url} alt={anime.name.title} />
                                    </Link>
                                    <button onClick={ () => { removeAnime( anime.key ) } }>X</button>
                                </li>
                            )
                    }) 
                }
            </section>
        </section>
    )
}

export default Favourites;