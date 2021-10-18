import {useEffect, useState} from "react";
import {getMovies} from "../../services/movies.services";
import Movie from "../movie/Movie";
import SearchMovie from "../search_movie/SearchMovie";
import './Movies.css'

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [searchedName, setSearchedName] = useState('')

    useEffect(() => {
        getMovies(page).then(value => setMovies([...value.results]))
    }, [page])

    const pageMinus = () => {
        if (page !== 1) {
            setPage(page - 1)
            setSearchedName('')
        }
    }

    const pagePlus = (q) => {
        if (page < 1000) {
            setPage(page + q)
            setSearchedName('')
        }
    }

    return (
        <div className={'movies_page'}>

            <div className="searcher">
                <SearchMovie
                    setMovies={setMovies}
                    searchedName={searchedName}
                    setSearchedName={setSearchedName}
                    page={page}
                />
            </div>

            <div className={'movies'}>
                {movies.length > 0 && movies.map(thisMovie => <Movie thisMovie={thisMovie} key={thisMovie.id}/>)}
                {movies.length === 0 && <p className={'oops'}>oops! cannot find such film</p>}
            </div>

            <div className={"page_buttons"}>
                <button className={'page_button'} onClick={() => setPage(1)}>First</button>
                <button className={'page_button'} onClick={() => pageMinus}>Previous</button>
                <span className={'current_page'}>page {page}</span>
                <button className={'page_button'} onClick={() => pagePlus(1)}>{page + 1}</button>
                <button className={'page_button'} onClick={() => pagePlus(2)}>{page + 2}</button>
                <button className={'page_button'} onClick={() => pagePlus(3)}>{page + 3}</button>
                <button className={'page_button'} onClick={() => pagePlus(4)}>{page + 4}</button>
                <button className={'page_button'} onClick={() => pagePlus(1)}>Next</button></div>
        </div>
    );
}