import React from "react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <h2>Button</h2>
        <div className="button-group">
  <div className="button-item">
    <span>Primary</span>
    <Button type="primary">Button</Button>
  </div>
  <div className="button-item">
    <span>Secondary</span>
    <Button type="secondary">Button</Button>
  </div>
  <div className="button-item">
    <span>Error</span>
    <Button type="error">Button</Button>
  </div>
  <div className="button-item">
    <span>Success</span>
    <Button type="success">Button</Button>
  </div>
</div>
      </div>

      <hr />

      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="success">Success alert.</Alert>
        <Alert type="error">Error alert.</Alert>
        <Alert type="warning">Warning alert.</Alert>
        <Alert type="info">Info alert.</Alert>
      </div>
    </div>
  );
}

export default App;
