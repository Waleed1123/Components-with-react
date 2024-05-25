import "./App.css";
import BButton from "./Components/BButton";
import BAInput from "./Components/BAInput";
function App() {
  return (
    <>
      <div className="container">
        <h2>Different Buttons</h2>
        <BButton className="primary btn" btnValue="Primary" />
        <BButton className="btn login" btnValue="login" />
        <BButton className="btn secondary" btnValue="Secondary" />
        <div className="inputs">
          <h2>Different Inputs</h2>
          {/* Check Box */}
          <h3>Check Box</h3>
          <BAInput type="checkbox" />
          {/* Number Imput */}

          <h3>Number Box</h3>
          <BAInput
            type="number"
            className="input"
            placeholder="Enter number   here"
          />
          {/* Email Imput */}

          <h3>Email Box</h3>
          <BAInput
            type="Email"
            className="input"
            placeholder="Enter Email   here"
          />
          {/* Email Imput */}

          <h3>password Box</h3>
          <BAInput
            type="password"
            className="input"
            placeholder="Enter password here"
          />
          {/* File input */}
          <BAInput
            type="file"
            className="file"
          />
        </div>
      </div>
    </>
  );
}

export default App;
