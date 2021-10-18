import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movie_details/MovieDetails";
import Header from "./components/header/Header";

function App() {

    return (
        <div className="App">
            <Router>

                <Header/>

                <Route exact path={'/movies'} component={Movies}/>
                <Route path={'/movies/:id'} component={MovieDetails}/>

            </Router>
        </div>
    );
}

export default App;
