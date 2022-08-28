import {ADD_USER, DELETE_USER} from "./UserAction";


const initialState = {
    users: [
        {
            id: 1,
            first_name: "Filip",
            last_name: "Dyrčík",
            avatar: "https://gravatar.com/avatar/99df1a5b2917db695be7ad69e46d9164?s=400&d=robohash&r=x",
        },
        {
            id : 2,
            first_name: "Lukáš",
            last_name: "Rubeš",
            avatar: "https://gravatar.com/avatar/2ee9007fc61fd3a725bd11694b1154d1?s=400&d=robohash&r=x",
        }
    ]
}


const userReducer = (state = initialState, action) => {
//function UserReducer(state = initialState, action) {

    switch(action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload]};

        case DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload)}

        default:
           return state
    }

}

export default userReducer;