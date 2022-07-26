import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Product from "./pages/product/Product";
import Singleproduct from "./components/singleproduct/Singleproduct";
import Scroll from "./components/Scroll/Scroll";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:id" element={<Singleproduct/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
