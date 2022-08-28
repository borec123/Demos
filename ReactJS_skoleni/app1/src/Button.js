import {useEffect, useState} from "react";
import "./Button.css"

function Button(props) {

    const[setCount] = useState(0)


    useEffect( () => {
        document.title = `Button no. ${props.id} is pressed.`
    }, [props.id])

    function handleClick() {
        //setToggled(!isToggled)
        setCount(prevState => prevState + 1)
        props.setSelectedId(props.id)
    }

    const color = props.selectedId === props.id ? "redButton" : "whiteButton"

    return (
        <button className={color} onClick={handleClick}>
            { props.name }
        </button>
    );
}

export default Button;
