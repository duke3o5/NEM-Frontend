
import { Homepage } from "./routes/Homepage";
import { Login } from "./routes/Login";
import { Navbar } from "./routes/Navbar";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./routes/Signup";
import { Post } from "./routes/Post";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/posts" element={<Post/>}/>
        </Routes>
    </div>
  );
}

export default App;
