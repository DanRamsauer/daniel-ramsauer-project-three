import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// anime={anime} nextPage={nextPage} setNextPage={setNextPage} setAnime={setAnime}

const NextPage = ({ nextPage, setAnime, anime, setNextPage }) => {

    const { page } = useParams();

    useEffect( () => {
        axios({
        url: 'https://api.jikan.moe/v4/top/anime',
        method: 'GET',
        dataResponse: 'json',
        params: {
          page: page
        }
      }).then((res) => {
        const results = res.data.data;
        setAnime(results);
      })
    },[page])

    return(
        <div>
            <Link to={`/page/${(page - 1)}`}>
                <h1>last</h1>
            </Link>
            <Link to={`/page/${ page + 1 }`}>
                <h1>next</h1>
            </Link>
            {/* <button onClick={()=> setNextPage(nextPage - 1)}>Last Page</button>

            <button onClick={()=> setNextPage(nextPage + 1)}>Next Page</button>

            <p>{`Page ${nextPage}`}</p> */}

            <section className="anime">
            {
                anime.map( (anime) => {
                    return(
                        <li className="wrapper" key={anime.mal_id}>
                            <Link to={`/anime/${anime.mal_id}`}>
                                <img src={anime.images.jpg.image_url} alt={anime.title} />
                            </Link>
                        </li>
                     )
                })
            }
            </section>
        </div>
    )
}

export default NextPage;