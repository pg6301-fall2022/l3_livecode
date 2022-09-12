import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


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

export function ListMovies() {
    return <div>
        <h1> Movie List </h1>
        {MOVIES.map(movie => <MovieCard key={movie.title} movie={movie} />)}
    </div>;
}

function MovieApplication() {
    return <Routes>
            <Route path={"/"} element={<ListMovies />}/>
            <Route path={"/new"} element={<CreateMovie />}/>
        </Routes>
}

function CreateMovie(){
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const [newMovie, setNewMovie] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        setNewMovie({title, year, plot});
        }, [title, year, plot]);

    function handleSubmit(event){
        event.preventDefault();
        MOVIES.push(newMovie);
        navigate("..");
    }

    return <form onSubmit={handleSubmit}>
        <h1> Create new movie </h1>
        <div>
            Title: <input value={title} onChange={event => setTitle(event.target.value)}/>
        </div>
        <div>
            Year: <input value={year} onChange={event => setYear(event.target.value)}/>
        </div>
        <div>
            Plot: <textarea value={plot} onChange={event => setPlot(event.target.value)}/>
        </div>
        <button>Submit</button>
        <pre>
            {JSON.stringify(newMovie)}
        </pre>
    </form>;
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
