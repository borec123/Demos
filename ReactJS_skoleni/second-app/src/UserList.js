import UserItem from "./UserItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function UserList(props) {

    const dispatch = useDispatch()

    useEffect( () => {
        loadUsers()
    }, [props.id])

    function loadUsers() {
        if(users.length ==0) {
            dispatch(actionFetchUsers())
            fetch("https://reqres.in/api/users")
                .then(resp => resp.json())
                .then(data => dispatch(actionFetchUsersSuccess()))
                .catch(err => dispatch(actionFetchUsersSuccess(err)))
        }
    }



    const users = useSelector(state => state.users)

    return (
        <div className="UserList">

            {users.map( item => <UserItem user={item}  key={item.id}/>)}

        </div>
    );
}

export default UserList;
