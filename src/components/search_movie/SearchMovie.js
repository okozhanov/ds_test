import {getMovieByTitle, getMovies} from "../../services/movies.services";
import './SearchMovie.css'

export default function SearchMovie({setMovies, searchedName, setSearchedName, page}) {

    const inputChanged = (ev) => {
        setSearchedName(ev.target.value)
    }

    const formSubmitted = (ev) => {
        ev.preventDefault()
        getMovieByTitle(ev.target.search.value).then(value => setMovies([...value.results]))
    }

    let formCleared = () => {
        setSearchedName('')
        getMovies(page).then(value => setMovies([...value.results]))
    }

    return (
    <div className={'search_movie'}>
        <form className={'search_movie_form'} onSubmit={formSubmitted}>
            <input
                className={'search_input'}
                type="text"
                name={'search'}
                placeholder={'search movies'}
                value={searchedName}
                onChange={inputChanged}
            />
            {searchedName.length > 0 && <span className={'clear_search'} onClick={formCleared}><i className="fas fa-times"> </i></span>}
            <button className={'search_movie_button'} type={"submit"}><i className="fas fa-search"> </i></button>
        </form>
    </div>
  );
}