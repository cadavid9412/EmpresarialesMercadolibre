import './App.css';
import {useState,useEffect} from "react";
import itemService from "./services/itemService";
import {Button} from '@material-ui/core';

function App() {
  //Hooks
  const [valueInput, setValueInput] = useState("");
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  
  const changeHandler=(event) =>{
    setValueInput(event.target.value);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();  
    setSearchTerm(valueInput); //cambia lo que haya en la caja de texto 
  };

  useEffect (()=>{
    itemService.getItem(searchTerm).then(result => setItems(result.results));
  },[searchTerm]);
  
  
  return (
    <div className="App">
      <h1>Bienvenido al MercadoNegro</h1>
      <form onSubmit = {submitHandler}>
      <input type="search" onChange ={changeHandler} value={valueInput}></input>
      </form>
      {items.map(item =>{
          return (
          <div key ={item.id}>
            <p>{item.title}</p>
            <p>{item.value_id}</p>
            <img src={item.thumbnail}></img>
            <p><Button href="#outlined-buttons" color="primary">
            Detalle
            </Button></p>
            <p>{item.price}</p>

          </div>)
          
      })}
    </div>

  );
}

export default App;
