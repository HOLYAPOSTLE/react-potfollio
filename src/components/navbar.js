import {Component} from "react";
import {MenuData} from "./menu";
import "./navbarStyle.css";
//import logo from "./image/New-logo.png"


class Navbar extends Component {

    state = {clicked: false}

    theClicked =() =>{
        this.setState
        ({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="nav-logo">PAUL</h1>

                <div className="dropmenu" onClick={this.theClicked}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) =>{
                        return(
                            <li key={index}>
                        <a href={item.URL} className={item.cName}>
                            <i className={item.icon}></i>{item.title}
                        </a>
                    </li>
                        )
                    })} 
                </ul>
            </nav>
        )
    } 
}

export default Navbar