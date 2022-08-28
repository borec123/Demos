import "./CSS/Form.css"
import Button from "./Button";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ADD_USER, addUser, DELETE_USER} from "./UserAction";
import {useDispatch} from "react-redux";

function Form(props) {

    const dispatch = useDispatch()

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const navigate = useNavigate()

    const getInputValue0 = (event)=>{
        // show the user input value to console
        const userValue = event.target.value;
        setFirstName(userValue)
        console.log({firstName});
        console.log({lastName});
    };

    const getInputValue = (event)=>{
        // show the user input value to console
        const userValue = event.target.value;
        setLastName(userValue)
        console.log({firstName});
        console.log({lastName});
    };


    function handleClick() {
        dispatch(addUser(firstName, lastName))
        navigate(-1)
    }

    return (
        <div className="form">

            <label className="label">Jméno:</label>
            <input name="first_name" type="text"  onChange={getInputValue0}/>
            <label className="label">Příjmení:</label>
            <input name="last_name" type="text"  onChange={getInputValue}/>
            <br/>
            <Button name="Přidat" className="btnAdd" onClick={() => handleClick()}></Button>

        </div>
    );
}

export default Form;
