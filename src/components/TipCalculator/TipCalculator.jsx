import React, { useState } from "react";
import "./TipCalculator.css";
const TipCalculator = () => {
  const [amount, setAmount] = useState();
  const [tip, setTip] = useState(10);
  const [splitCount, setSplitCount] = useState(1);
  const [bill, setBill] = useState(null);
  const [err, setErr] = useState("");

  function calculateTip() {
    if (!amount || amount < 0 || !tip || tip < 0) {
      setErr("Please enter valid values");
      return;
    }
    const amount2 = parseFloat(amount);
    const tipAmount = (amount2 * tip) / 100;

    const totalAmount = amount2 + tipAmount;
    const tipPerPerson = tipAmount / splitCount;
    const totalPerPerson = totalAmount / splitCount;
    setBill({
      totalAmount: totalAmount,
      tipPerPerson: tipPerPerson,
      totalPerPerson: totalPerPerson,
    });
  }
  return (
    <div
      className="TipWrapper"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="inputconta">
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          placeholder="enter amount..."
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </div>
      <div className="inputconta">
        <label>TipPercent: </label>
        <input
          type="number"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        ></input>
      </div>
      <div className="inputconta">
        <label>SplitCount: </label>
        <input
          type="number"
          value={splitCount}
          onChange={(e) => setSplitCount(e.target.value)}
        ></input>
      </div>
      <button onClick={calculateTip}>Calculate Tip</button>
      {bill ? (
        <div className="billCont">
          <p>Total Amount: {bill.totalAmount}</p>
          <p>Tip per Person: {bill.tipPerPerson}</p>
          <p>Total per Person: {bill.totalPerPerson}</p>
        </div>
      ) : (
        err
      )}
    </div>
  );
};

export default TipCalculator;
