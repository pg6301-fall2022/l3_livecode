import {Route, Routes, useNavigate} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";

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

export function MovieApplication() {
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


