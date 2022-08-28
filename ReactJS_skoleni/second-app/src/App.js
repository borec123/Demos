import './CSS/App.css';
import Form from "./Form";
import UserList from "./UserList";
import Menu from "./Menu";
import {Route, Routes, useNavigate} from 'react-router-dom'
import {useState} from "react";
import {useSelector} from "react-redux";
import {addAddUser, addUser} from "./UserAction";

function App() {

  return (
    <div className="App">

    <Menu className="menu"/>

    <Routes>
        <Route path="/" element={ <UserList  /> } />
        <Route path="/newUser" element={ <Form  /> } />
    </Routes>

    </div>
  );
}

export default App;
