import "./CSS/Menu.css"
import Button from "./Button";
import {Link} from "react-router-dom";

function Menu(props) {


    return (
        <div className="menu">
            <Link to="/">
                <Button name="Seznam uživatelů" className="btnMenu" ></Button>
            </Link>

            <Link to="/newUser">
                <Button name="Přidat uživatele" className="btnMenu" ></Button>
            </Link>
        </div>
    );
}

export default Menu;
