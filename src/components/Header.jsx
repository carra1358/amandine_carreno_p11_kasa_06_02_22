import { Link, NavLink } from "react-router-dom";
import LogoRed from "../assets/logo_red.png";
import "../styles/header.css";
import CustomLink from "./CustomLink";





function Header(){
    
    return(
        <div id="header_container">
            <div>
                <img src={LogoRed} alt="logo kasa" />
            </div>
            <nav id="nav_container">
               <CustomLink to="/" label="Acceuil"/>
               <CustomLink to="about" label="A Propos"/>
            </nav>
        </div>
    )
}

export default Header;