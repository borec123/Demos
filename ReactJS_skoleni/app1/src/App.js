import './App.css';
import Button from "./Button";
import {useState} from "react";

function App() {

    const[selectedId, setSelectedId] = useState("1")

    return (
    <div className="App">
          <Button name={"Button1"} id={"1"} selectedId={selectedId} setSelectedId={setSelectedId}></Button>
          <Button name={"Button2"} id={"2"} selectedId={selectedId} setSelectedId={setSelectedId}></Button>
          <Button name={"Button3"} id={"3"} selectedId={selectedId} setSelectedId={setSelectedId}></Button>
          <Button name={"Button4"} id={"4"} selectedId={selectedId} setSelectedId={setSelectedId}></Button>
    </div>
  );
}

export default App;
