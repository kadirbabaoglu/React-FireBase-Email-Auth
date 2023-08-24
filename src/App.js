import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword"
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";


function App() {
 
  return (
  
    <Router>
      <Routes>
       
        <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Home/>} />
        </Route>

        <Route path="/" element={<AuthLayout/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forget-password" element={<ForgetPassword/>} />
        </Route>

      </Routes>
    </Router>

  );
}

export default App;
