import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
    const [findAnime, setFindAnime] = useState([]);

      const searchChange = (e) => {
        setFindAnime(e.target.value);
      }

      const clearSearch = () => {
        findAnime = '';
      }

    return(
        <section className="form">
            <form>
                <label htmlFor="search">Search an anime: </label>
                <input type="text" htmlFor='search' placeholder="Naruto" onChange={searchChange} value={findAnime}/>

                <Link to={`/search/${findAnime}`}>
                    <button>Search</button>
                </Link>
            </form>
        </section>
    )
}

export default Form;