import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DisplayAnime = ({ nextPage, setNextPage }) => {

    const [anime, setAnime] = useState([]);

    useEffect( () => {
        axios({
        url: 'https://api.jikan.moe/v4/top/anime',
        method: 'GET',
        dataResponse: 'json',
        params: {
          page: nextPage
        }
      }).then((res) => {
        const results = res.data.data;
        setAnime(results);
      })
    },[nextPage])

    return(
        <section>
            {/* <Link to={`/page/${2}`}>
                <h3>Next page</h3>
            </Link> */}

            { nextPage > 1 ? <button onClick={()=> setNextPage(nextPage - 1)}>Last Page</button> : null }
    
            { nextPage > 0 ? <button onClick={()=> setNextPage(nextPage + 1)}>Next Page</button> : null }
    
            { nextPage > 0 ? <p>{`Page ${nextPage}`}</p> : null }

            <Link className="link" to={'/watch/watchlater'}>
                <h4>Favourites</h4>
            </Link>

            <section className="anime">
                {
                    anime.map( (anime) => {
                        return(
                            <li className="container" key={anime.mal_id}>
                                <Link to={`/anime/${anime.mal_id}`}>
                                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                                </Link>
                            </li>
                        )
                    })
                }
            </section>

        </section>
    )
}

export default DisplayAnime;