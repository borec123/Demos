import "./CSS/UserItem.css"
import Button from "./Button";
import {useDispatch} from "react-redux";
import {ADD_USER, deleteUser, DELETE_USER} from "./UserAction";

function UserItem(props) {

    let first_name = props.user.first_name;
    let last_name = props.user.last_name;

    const dispatch = useDispatch()

    return (
        <div className="wrapper">
            <img className="avatar" src={props.user.avatar}/>
            <div className="userDetails">
                <label className="name">{first_name} {last_name}</label>
            </div>
            <div className="buttonBar">
                <Button className="btnRemove" name="Smazat" onClick={() => dispatch(deleteUser(props.user.id))} ></Button>
            </div>
        </div>
    );
}

export default UserItem;
