const { useState, useEffect, useRef } = React;
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";

export default function App(){
    return (<>
        <main className="grid">
            <h1>Under constraction</h1>
            <p>We are currently working on Parkinpeace.eu</p>
            <p>Something new and exiting is coming</p>
            <footer>
                <p>&copy; {new Date().getFullYear()} Parkinpeace.eu. All rights reserved.</p>
                <p>Developer <a href="https://www.intastellarsolutions.com" target="_blank">Intastellar Solutions, International</a></p>
            </footer>
        </main>
    </>);
}