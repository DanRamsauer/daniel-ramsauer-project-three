// TODO: grab from firebase and display on this page with a <LINK /> to this page that displays the animes in firebase
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const WatchLater = () => {

    const [anime, setAnime] = useState([]);
    const { animeSearched } = useParams();

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
          setAnime(newState) 
        })
      }, [])


    return(
        <section>
            <Link to={'/'}>
                <h3>Home</h3>
            </Link>
            <div className="aboutAnime">
                { 
                    anime.map( (anime) => {
                        const shows = anime.name
                            return(
                                <li className="wrapper" key={shows.mal_id}>
                                <Link to={`/anime/${shows.mal_id}`}>
                                    <img src={shows.images.jpg.image_url} alt={shows.title} />
                                </Link>
                        </li>
                            )
                    }) 
                }
            </div>
        </section>
    )
}

export default WatchLater;