import './MovieDetails.css'
import {stargazer} from "../../services/stargazer";
import {Link} from "react-router-dom";

const posterUrl = 'https://image.tmdb.org/t/p/w500/'

export default function MovieDetails(props) {

    const {location: {state}} = props

    const stars = stargazer(state.vote_average)

    return (
    <div className={'movie_details_page'}>
        <Link className={'back_link'} to={'/movies'}><i className="fas fa-arrow-left"> movies</i></Link>

        <div className="movie_details">
            <div className="image_container">
                <img className={'movie_image'} src={posterUrl + state.backdrop_path} alt=""/>
            </div>
            <div className="movie_info">
                <h1>{state.title}</h1>
                {stars.yes_stars && stars.yes_stars.map((star, index) => <i key={index} className="fas fa-star"> </i>)}
                {stars.no_stars && stars.no_stars.map((star, index) => <i key={index} className="far fa-star"> </i>)}
                <h5>{state.release_date}</h5>
                <p>{state.overview}</p>
            </div>
        </div>
    </div>
  );
}