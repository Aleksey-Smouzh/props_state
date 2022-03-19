import Navbar from "./comp/Navbar/Navbar";
import "./App.css";
import T4 from "./comp/T4/T4";
import T3 from "./comp/T3/T3";
import T2 from "./comp/T2/T2";
import T1 from "./comp/T1/T1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import T5 from "./comp/T5/T5";
import T6 from "./comp/T6/T6";
import T7 from "./comp/T7/T7";
import T8 from "./comp/T8/T8";
function App(props) {
  console.log(props)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/t1" element={<T1 state={props.state.veganData}/>}></Route>
          <Route path="/t2" element={<T2 />}></Route>
          <Route path="/t3" element={<T3 />}></Route>
          <Route path="/t4" element={<T4 />}></Route>
          <Route path="/t5" element={<T5 />}></Route>
          <Route path="/t6" element={<T6 />}></Route>
          <Route path="/t7" element={<T7 />}></Route>
          <Route path="/t8" element={<T8 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}
export default App;
