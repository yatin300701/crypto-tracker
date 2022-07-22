import React from "react";
import "../../styles/banner.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CryptoState } from "../../Cryptocontext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Banner() {
  const { Currency } = CryptoState();
  let currency = Currency === "USD" ? "usd" : "inr";
  let coins = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

  const [Trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(coins)
      .then((response) => response.json())
      .then((jsondata) => {
        setTrending(jsondata);
      });
  }, [Currency]);

  const items = Trending.map((coin, index) => {
    return (
      <>
        <img src={coin.image} alt={coin.id} width="100" height="100" />
      </>
    );
  });

  console.log(Trending);
  const response = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <>
      <div className="banner-container">
        <div className="tag-line">
          <h1>Crypto Hunter</h1>
          <p>Get all the info regarding your favorite crypto</p>
        </div>
        <div className="all-crypto">
          <AliceCarousel
            items={items}
            mouseTracking
            infinite
            autoPlay
            autoPlayInterval={1000}
            animationDuration={1400}
            disableDotsControls
            responsive={response}
          />
        </div>
      </div>
    </>
  );
}
