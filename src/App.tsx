
import { Route,Routes } from "react-router-dom"
import React_form from "./Components/React_form/React_form"
import Second_page from "./Components/Second_page/Second_page"
function App() {
  return (
    
    <Routes>
      <Route path='/' element={<React_form/>}/>
      <Route path='/second' element={<Second_page/>}/>
    </Routes>
  )
}

export default App
