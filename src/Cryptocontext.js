import React, { useState, createContext, useContext, useEffect } from "react";
const Crypto = createContext();
export default function Cryptocontext({ children }) {
  const [Currency, setCurrency] = useState("IND");
  const [Symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (Currency === "USD") setSymbol("$");
    if (Currency === "IND") setSymbol("₹");
  }, [Currency]);

  return (
    <>
      <Crypto.Provider value={{ Currency, Symbol, setCurrency }}>
        {children}
      </Crypto.Provider>
    </>
  );
}
export const CryptoState = () => {
  return useContext(Crypto);
};
