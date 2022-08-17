import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [findAnime, setFindAnime] = useState([]);

      const searchChange = (e) => {
        setFindAnime(e.target.value);
      }

      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${findAnime}`);
        setFindAnime('');
      }

    return(
        <section className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search for an anime : </label>
                <input type="text" htmlFor='search' placeholder="Naruto" onChange={searchChange} value={findAnime}/>

                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default Form;