import './App.css';
import Navbar from './components/Navbar';
import Item from './components/Item';
import Bill from './components/Bill';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let items=[{"id":0 , "name":"Laptop" , "number":12},{"id":1 ,"name":"Desktop" , "number":30},{"id":2 ,"name":"IPhone-12" , "number":10},{"id":3 ,"name":"One Plus" , "number":8},{"id":4 ,"name":"Random" , "number":5}]
  const [ItemNumber, setItemNumber] = useState(0);
  const [total, settotal] = useState(0)
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<>
        {
          items.map((item)=>{
            return (<Item key={item.id} item={item} setitem={setItemNumber}  settotal = {settotal}/>)
          })
        }
        </>} />
        <Route exact path="/bill/:quant" element={<Bill item={items[ItemNumber]} total={total}/>}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
