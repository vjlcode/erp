import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from "./features/homepage/Home"
import Blog from "./features/homepage/Blog"
import Contato from "./features/homepage/Contato"
import CriarConta from "./features/homepage/Register"
import Login from "./features/homepage/Login"

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/register">Criar Conta</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/register" element={<CriarConta />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
