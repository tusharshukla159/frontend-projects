import React, { useEffect } from "react";
import { useState } from "react";
import './CurrencyConvertor.css'
const CurrencyConvertor = () => {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
   
   async function fetchExchangeRates(){
    const result= await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
    const res= await result.json();
    const calculatedRate=res?.rates[toCurrency];
    setExchangeRate(calculatedRate);
    setConvertedAmount(amount*calculatedRate);
   }

   useEffect(()=>{
    fetchExchangeRates();

   },[toCurrency,fromCurrency,amount])
  return (
    <div className="currencyConvertorWrapper">
        <h1>Currency Convertor</h1>
      <div className="currencyCovertor">
        <input
          type="number"
          value={amount}
          placeholder="enter amount"
          onChange={(e) => setAmount(e.target.value)}
        >  </input>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
          <option value={"INR"}>INR</option></select>
      
        <p> To</p>
         <input
          type="number"
          value={convertedAmount}
          readOnly
        >  </input>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
        <option value={"INR"}>INR</option>
        <option value={"EUR"}>EUR</option>
        <option value={"USD"}>USD</option></select>
      </div>
      <p>Exchange Rate: 1 {fromCurrency}= {exchangeRate} {toCurrency}</p>
    </div>
  );
};

export default CurrencyConvertor;
