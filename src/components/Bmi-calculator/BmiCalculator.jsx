import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [err, setErr] = useState("");

  function calculateBMI() {
    if (!weight || !height || weight < 0 || height < 0) {
      setErr("Pls enter valid weight and height");
    }
    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height / 100);
    const bmiVal = (numericWeight / (numericHeight * numericHeight)).toFixed(2);
    setBmi(bmiVal);
  }
  return (
    <div className="bmiWrapper" style={{display: 'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',textAlign:'center'}}>
        <h1>BMI Calculator</h1>
      <div className="bmiCalculator" style={{marginBottom:'20px'}}>
        <input style={{padding:'8px', borderRadius:'8px'}}
          type="number"
          value={weight}
          placeholder="enter weight..."
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <input style={{padding:'8px', borderRadius:'8px'}}
          type="number"
          value={height}
          placeholder="enter height..."
          onChange={(e) => setHeight(e.target.value)}
        ></input>
      </div>
      <button onClick={calculateBMI} style={{padding:'8px', borderRadius:'8px', backgroundColor:'greenyellow', marginBottom:'20px'}}>Calculate BMI</button>
      <div className="bmi" style={{ fontWeight:'bold',backgroundColor:'orange', width:'150px',textAlign:'center' ,borderRadius:'10px'}}>
        {err == "" ? (
          <div>
            <p>{bmi}</p>
            <p>
              {bmi == null
                ? null
                : bmi < 18.5
                ? "underweight"
                : 18.5 <= bmi && bmi <= 24.9
                ? "Normal"
                : 25 <= bmi && bmi <= 29.5
                ? "overweight"
                : "obese"}
            </p>
          </div>
        ) : (
          <p>{err}</p>
        )}
      </div>
    </div>
  );
};

export default BmiCalculator;
