import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../Cryptocontext";
import MainComponent from "./MainComponent";
import "../styles/coingraph.css";

export default function Coingraph() {
  let { id } = useParams();
  const [coin, setcoin] = useState({});
  const { Currency, Symbol } = CryptoState();
  let currency = Currency === "INR" ? "inr" : "usd";

  // `https://api.coingecko.com/api/v3/coins/${id}`
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((data) => data.json())
      .then((data) => setcoin(data));
  }, [Currency]);
  // console.log(coin);
  return (
    <div className="coingraph-container">
      <div className="coingraph_sidebar">
        <div className="coingraph_img">
          <img
            src={coin.image?.large}
            alt="coin"
            className="coin_image_coingraph"
          />
        </div>
        <div className="coingraph-name">{coin.id}</div>
        <div>{coin.description?.en.split(". ")[0]}</div>
        <div className="coingraph-rank">
          <span>Rank : </span>
          {coin.coingecko_rank}
        </div>
        <div className="coingraph-cuurent-price">
          <span>Current Price : </span>
          {coin.market_data?.current_price[currency]}
          {Symbol}
        </div>
        <div className="coingraph-market-cap">
          <span>Market Cap : </span>
          {coin.market_data?.market_cap[currency]}
          {Symbol}
        </div>
      </div>
      <div className="coingraph_main">
        <MainComponent />
      </div>
    </div>
  );
}
