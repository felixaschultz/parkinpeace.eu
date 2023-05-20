const { useState, useEffect, useRef } = React;
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const NavLink = window.ReactRouterDOM.NavLink;
import {local} from "../../localization/local";

const region = (localStorage.getItem("region")===null) ? "da" : localStorage.getItem("region");

export default function Nav(){
    return (
        <>
            <nav className="navigation">
                {
                    Object.keys(local[region].navigation).map((key, index) => {
                        return <NavLink key={index} to={local[region].navigation[key].link} style={({ isActive }) => ({ 
                                    color: isActive ? 'greenyellow' : 'blue' })}>
                                    {local[region].navigation[key].name}
                                </NavLink>
                    })
                }
            </nav>
        </>
    )
}