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

function MovieApplication() {
    return <Routes>
            <Route path={"/"} element={<h1>This is where the movies go</h1>}/>
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
