import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";

export default function App() {
    return (
        <div>

            <nav className="bg-slate-900 text-white p-4 flex gap-4">
                <NavLink to="/">List View</NavLink>
                <NavLink to="/board">Board View</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </div>
    );
}