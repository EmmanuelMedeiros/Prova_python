import Home from "./components/Home";
import Register from "./components/Register";
import { Outlet } from "react-router-dom";

function App() {
  return(
    <div>
      <Outlet/>
    </div>
  )
}

export default App;
