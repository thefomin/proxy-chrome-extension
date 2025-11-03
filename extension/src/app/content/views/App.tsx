import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className="popup-container">
      {show && (
        <div className={`popup-content ${show ? "opacity-100" : "opacity-0"}`}>
          <h1>content view ? {show}</h1>
        </div>
      )}
      <button className="toggle-button" onClick={toggle}>
        123
      </button>
    </div>
  );
}

export default App;
