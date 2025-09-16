import React, { useState } from "react";
import "./StepProgress.css";
const StepProgressBar = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = ["Step1", "Step2", "Step3", "Step4", "Step5"];
  function calculateWidth() {
    return (100 / (steps.length - 1)) * activeStep;
  }
  return (
    <div
      className="StepProgressBarWrapper"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Step Progress Bar</h1>
      <div
        className="Steps"
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "lightgreen",
        }}
      >
        {steps.map((item, index) => (
          <div
            className={`step ${index + 1 <= activeStep ? "active" : ""}`}
            key={index}
            style={{
              width: `${calculateWidth()}%`,
              height: "50px",
              borderRadius: "15px",
            }}
          >
            {" "}
            {item}
          </div>
        ))}
      </div>
      <div className="btn" style={{ marginTop: "20px" }}>
        <button
          onClick={() => setActiveStep(activeStep - 1)}
          style={{ padding: "8px", borderRadius: "8px" }}
          disabled={activeStep == 1}
        >
          {" "}
          Prev
        </button>
        <button
          onClick={() => setActiveStep(activeStep + 1)}
          style={{ padding: "8px", borderRadius: "8px" }}
          disabled={activeStep == steps.length}
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};

export default StepProgressBar;
