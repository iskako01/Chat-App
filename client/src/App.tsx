import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  );
}
