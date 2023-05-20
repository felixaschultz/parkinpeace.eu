const { useState, useEffect, useRef } = React;
import Nav from "../Nav/Nav";
import "./Header.css";
export default function Header(){
    return (<>
        <header className="main-header">
            <h1>Parkinpeace.eu</h1>
            <Nav />
        </header>
    </>);
}