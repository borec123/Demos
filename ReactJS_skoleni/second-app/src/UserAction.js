


    export const ADD_USER = 'ADD_USER';
    export const DELETE_USER = 'DELETE_USER';
    export const FETCH_USERS = 'LOAD_USERS';
    export const FETCH_USERS_SUCCESS  = 'LOAD_USERS';
    export const FETCH_USERS_ERROR = 'LOAD_USERS';


    export function addUser(firstName, lastName) {
        return {
            type: ADD_USER,
            payload: {id: Math.random(), first_name: firstName, last_name: lastName, avatar: ""}
        }
    }

    export function deleteUser(id) {
        return {
            type: DELETE_USER,
            payload: id
        }
    }

    export function actionFetchUsers() users => {
        return {
            type: FETCH_USERS,
            payload: users
        }
    }

    export function actionFetchUsersSuccess() {
        return {
            type: FETCH_USERS_SUCCESS,
        }
    }

    export function actionFetchUsersSuccess() {
        return {
            type: FETCH_USERS_ERROR,
        }
    }


