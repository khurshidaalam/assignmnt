import './App.css';
import { Login, Dashboard, Layout } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
<>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Layout><Dashboard /></Layout> } />
          
      </Routes>

    </Router>
</>
  );
}

export default App;
