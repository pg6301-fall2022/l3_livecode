import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {MovieApplication} from "./movieApplication";

function FrontPage(){
    return <div>
        <h1> Yet another movie DB </h1>
        <ul>
            <li><Link to={"/movies"}> Show me Movies</Link></li>
            <li><Link to={"/movies/new"}> Let me add something </Link></li>
        </ul>
    </div>

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
