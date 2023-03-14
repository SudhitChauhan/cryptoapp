import React, { useEffect } from 'react'
import { globalStateData } from '../Services/Apis/CryptoApi';
import { coinsData } from '../Services/Apis/CryptoApi';
import { useDispatch, useSelector } from 'react-redux';
import { TbCoinBitcoin, Tb24Hours } from "react-icons/tb";
import { SiCoinmarketcap } from "react-icons/si";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BsBoxArrowRight } from "react-icons/bs";
import { newsData } from '../Services/Apis/CryptoApi';

export const Dashboard = () => {

  const globalState = useSelector(state => state.globalState);
  const coinsList = useSelector(state => state.coins.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalStateData());
    dispatch(coinsData());
    dispatch(newsData());
  }, []);

  return (
    <>
      <h3 className='my-4 welcome-text'><small>Hey</small> Welcome Sudhit75, <small>Glad to have you back!</small></h3>
      <div className='row g-3 mb-5'>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <div className='box'>
                <TbCoinBitcoin />
              </div>
            </div>
            <div className='content'>
              <div className='ruppe-grow'>
                <h4 className='fw-semibold'>{globalState.totalCoins}</h4>
              </div>
              <h6>Total Coins</h6>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <div className='box'>
                <SiCoinmarketcap />
              </div>
            </div>
            <div className='content'>
              <div className='ruppe-grow'>
                <h4 className='fw-semibold'>{globalState.totalMarkets}</h4>
              </div>
              <h6>Total Markets</h6>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <div className='box'>
                <MdCurrencyExchange />
              </div>
            </div>
            <div className='content'>
              <div className='ruppe-grow'>
                <h4 className='fw-semibold'>{globalState.totalExchanges}</h4>
              </div>
              <h6>Total Exchanges</h6>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <div className='box'>
                <Tb24Hours />
              </div>
            </div>
            <div className='content'>
              <div className='ruppe-grow'>
                <h4 className='fw-semibold'>{globalState.total24hVolume}</h4>
              </div>
              <h6>Total 24h Volume</h6>
            </div>
          </div>
        </div>
      </div>

      <div className='row g-3'>
        <div className='col-9'>
          <div className='common-card mb-5'>
            <Link to='cryptocurrencies/'><h5>World Top 10 Cryptocurrencies</h5></Link>
            <div className='card table-card'>
              {
                coinsList ? (
                  <table className="table coin-table">
                    <thead>
                      <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Coin</th>
                        <th scope="col">Price</th>
                        <th scope="col">Market cap</th>
                        <th scope='col'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        coinsList.slice(0, 7).map((item) => (
                          <tr key={item.uuid}>
                            {console.log(item)}
                            <td>{item.rank}</td>
                            <td>
                              <div className='d-flex tab-div'>
                                <div className='icon'>
                                  <img src={item.iconUrl} />
                                </div>
                                <h5 className='mb-0 fw-semibold'>{item.name}</h5>
                              </div>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.marketCap}</td>
                            <td>
                              <Link to={`/dashboard/crypto/${item.uuid}`} className='btn py-1 details-btn'>
                                <BsBoxArrowRight />
                              </Link>
                            </td>
                          </tr>
                        ))
                      }

                    </tbody>
                  </table>
                ) : null
              }
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='common-card'>
            <h5>Latest Crypto News</h5>
            <div className='card'>
              <div className='card-header'>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
