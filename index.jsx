import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


function FrontPage(){
    return <div>
        <h1> Yet another movie DB </h1>
        <ul>
            <li><Link to={"/movies"}> Show me Movies</Link></li>
            <li><Link to={"/movies/new"}> Let me add something </Link></li>
        </ul>
    </div>

}

const MOVIES = [
    {
        title: "Plan 9 from outer space",
        year: 1957,
        plot: "utter confusion"
    },
    {
        title: "Lecture 2 - Web applications",
        year: 2022,
        plot: "also confusion, but more modern"
    },
]

function MovieCard({movie}){
    const {title, year, plot} = movie;

    return <div>
        <h2> {title} - ({year}) </h2>
        <p> {plot} </p>
    </div>;
}

function ListMovies() {
    return <div>
        <h1> Movie List </h1>
        {MOVIES.map(movie => <MovieCard key={movie.title} movie={movie} />)}
    </div>;
}

function MovieApplication() {
    return <Routes>
            <Route path={"/"} element={<ListMovies />}/>
            <Route path={"/new"} element={<h1>This is where you'll add something new</h1>}/>
        </Routes>
}

function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/*"} element={<MovieApplication />}/>
            <Route path={"*"} element={<h1> I don't know that one </h1>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(<Application/>,
    document.getElementById("app"));
