import React from "react";
import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { CryptoState } from "../../Cryptocontext";
import "../../styles/coinlist.css";

export default function CoinList() {
  const { Currency } = CryptoState();
  const [coinlist, setcoinlist] = useState([]);
  const [datalist, setdatalist] = useState([]);
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const [totalpage, settotalpage] = useState(0);

  const searchFunction = () => {
    console.log(search);
    const temp = coinlist.filter((name) => {
      return name.id.includes(search);
    });
    if (search != "") setcoinlist(temp);
    else setcoinlist(datalist);
  };
  const handleEachCoin = (coin) => {
    // windo;
  };
  const handleNext = () => {
    setpage(page + 1);
  };
  const handlePre = () => {
    if (page - 1 != 0) setpage(page - 1);
  };

  let currency = Currency === "USD" ? "usd" : "inr";
  let currency_symbol = currency === "usd" ? "$" : "₹";

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setcoinlist(data.slice((page - 1) * 15, page * 15));

        setdatalist(data.slice((page - 1) * 15, page * 15));

        settotalpage(datalist.length);
      });
  }, [Currency, page]);

  console.log(coinlist, totalpage);

  return (
    <>
      <div className="coinlist">
        <div className="coinlist-top">Cryptocurrency Prices By Market Cap</div>
        <Form className="d-flex search-list">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setsearch(e.target.value)}
          />
          <Button
            variant="outline-light"
            onClick={searchFunction}
            className="btn-coinlist"
          >
            Search
          </Button>
        </Form>
        <Table hover variant="dark" className="table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coinlist.map((coin, idx) => {
              return (
                <tr onClick={handleEachCoin}>
                  <td className="coin_name">
                    <img src={coin.image} height="70" /> <p>{coin.id}</p>
                  </td>
                  <td>
                    {coin.current_price} {currency_symbol}
                  </td>
                  <td>{coin.price_change_percentage_24h} %</td>
                  <td>
                    {coin.market_cap} {currency_symbol}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <br />
        <div className="btn-container-coinlist">
          {
            <button className="btn-coinlist-btm" onClick={handlePre}>
              Pre
            </button>
          }
          <button className="btn-coinlist-btm" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
