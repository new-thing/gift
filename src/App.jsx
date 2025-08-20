import { Routes, Route } from "react-router-dom";
import Lock from "./Lock";
import Wish from "./Wish";
import Msg from "./Msg";

function App() {
  return (
    <>

    
    <Routes>
      <Route path="/" element={<Lock />} />
      <Route path="/wish" element={<Wish />} />
      <Route path="/msg" element={<Msg />} />
    </Routes>
    </>
  );
}

export default App;
