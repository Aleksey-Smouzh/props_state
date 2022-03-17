import Navbar from "./comp/Navbar/Navbar";
import "./App.css";
import T2 from "./comp/T2/T2";
import T1 from "./comp/T1/T1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/t1" element={<T1 state={props.state.veganData}/>}></Route>
          <Route path="/t2" element={<T2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}
export default App;
