import {Link} from "react-router-dom";
import './Movie.css'
import {stargazer} from "../../services/stargazer";

const posterUrl = 'https://image.tmdb.org/t/p/w500/'

export default function Movie({thisMovie}) {

    const stars = stargazer(thisMovie.vote_average)

    return (
        <div className={'movie'}>
            <Link className={'movie_details_link'} to={{pathname: `/movies/${thisMovie.id}`, state: thisMovie}}>
                <div className="poster_container">
                    <img className={'poster'} src={posterUrl + thisMovie.poster_path} alt="poster"/>
                </div>
                    {stars.yes_stars && stars.yes_stars.map((star, index) => <i key={index} className="fas fa-star"> </i>)}
                    {stars.no_stars && stars.no_stars.map((star, index) => <i key={index} className="far fa-star"> </i>)}
                    <h3>{thisMovie.title}</h3>
                    <h5>{thisMovie.release_date}</h5>
            </Link>
        </div>
    );
}

