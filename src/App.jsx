import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      setMessage("Enter weight and height");
      setBmi("");
      return;
    }
    const bmiValue = (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setMessage("Underweight");
    else if (bmiValue < 25) setMessage("Normal weight");
    else setMessage("Overweight");
  };

  return (
    <>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <input
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <input
          placeholder="Height (m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && <p>BMI: {bmi}</p>}
      <p>{message}</p>
    </>
  );
}

export default App;
