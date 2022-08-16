import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// TODO: finish creating seperate pages for the different api call pages

const NextPage = ({ nextPage, setNextPage, setAnime }) => {

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
        <div>
            <Link to={`/page/${nextPage}`}>
                <button onClick={()=> setNextPage(nextPage - 1)}>Last Page</button>
            </Link>

            <Link to={`/page/${nextPage}`}>
                <button onClick={()=> setNextPage(nextPage + 1)}>Next Page</button>
            </Link>
            <p>{`Page ${nextPage}`}</p>
        </div>
    )
}

export default NextPage;