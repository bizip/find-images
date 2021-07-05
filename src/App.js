import { useState,Fragment } from "react";
import SearchImage from './Components/Api/Api';
import InputForm from "./Components/UI/InputForm";
import ImageList from "./Components/Images/ImageList";


function App() {
  const [inputQuery,setInputQuery]=useState([]);
  const data=SearchImage(inputQuery);

  const getIdFromInput=(idFromInput)=>{
  setInputQuery(idFromInput)
  }

  return(<Fragment>

    <InputForm onAddId={getIdFromInput} />
    <ImageList data={data} />
  
    </Fragment>
  )
}
export default App;