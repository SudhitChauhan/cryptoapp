import React, { useEffect } from 'react';
import CoinOverview from '../../Components/Charts/CoinOverview'
import { SiCoinmarketcap } from "react-icons/si";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import { MdCurrencyExchange } from "react-icons/md";
import { TbCoinBitcoin } from "react-icons/tb";
import { AiOutlineLink } from "react-icons/ai";
import { BiBitcoin } from "react-icons/bi";
import { BsGithub, BsReddit, BsTelegram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { SiInternetexplorer } from "react-icons/si";
import { GiWhiteBook } from "react-icons/gi";
import OverView from '../../img/undraw_summer_1wi4.svg';
import { Link, useParams } from 'react-router-dom';
import { ExchangeToBuy } from '../../Components/CoinDetails/ExchangeToBuy';
import { MarketTo } from '../../Components/CoinDetails/MarketTo';
import { useDispatch, useSelector } from 'react-redux';
import { coinDetailData } from '../../Services/Apis/CryptoApi';

export const CryptoDetails = () => {

  let coinId = useParams();
  const dispatch = useDispatch();
  const coinDetail = useSelector(state => state.activeCoin.coin);

  useEffect(() => {
    dispatch(coinDetailData(coinId));
  }, [])

  return (
    <>
      {
        coinDetail?.uuid === coinId.coinId ? (
          <div className='row g-3 crypto-details'>
            <div className='col-12'>
              <div className='card coin-card'>
                <div className='d-flex justify-content-center gap-4 align-item-center'>
                  <div className='icon'>
                    <a href={coinDetail?.websiteUrl} target="_blank">
                      <img src={coinDetail?.iconUrl} />
                    </a>
                  </div>
                  <div className='align-self-center'>
                    <h3>
                      <span>{coinDetail?.name}</span>
                      <span className='ms-2 fs-5'><a href={coinDetail?.websiteUrl} target="_blank"><AiOutlineLink /></a></span>
                    </h3>
                    <h5>
                      <div className="grow-box">
                      {coinDetail.change[0] == "-" ? (
                          <span className="badge rounded-pill bg-danger"><CgArrowDown />{coinDetail.change}%</span>
                      ) : (
                        <>
                          {
                            coinDetail.change == "0.00" ? (
                              <span className="badge rounded-pill bg-dark">{coinDetail.change}%</span>
                            ) : (
                              <span className="badge rounded-pill bg-success"><CgArrowUp />{`+${coinDetail.change}%`}</span>
                            )
                          }
                        </>
                      )}
                      </div>
                    </h5>
                  </div>
                </div>
                <div className='align-self-center'>
                  <div className='text-end'>
                    <h4 className='fw-semibold mb-3'>PR : {coinDetail.price}</h4>
                    <div className='d-flex gap-3 justify-content-center align-item-center'>
                      {
                        coinDetail.links ? coinDetail.links.map((item, index) => {
                          switch (item.type) {
                            case 'website':
                              return (<div className='link-icon small' key={index}><a href={item.url} target="_blank"><AiOutlineLink /></a></div>);
                            case 'bitcointalk':
                              return (<div className='link-icon small' key={index}><a href={item.url} target="_blank"><BiBitcoin /></a></div>);
                            case 'facebook':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><BsFacebook /></a></div>);
                            case 'github':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><BsGithub /></a></div>);
                            case 'reddit':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><BsReddit /></a></div>);
                            case 'twitter':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><BsTwitter /></a></div>);
                            case 'youtube':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><BsYoutube /></a></div>);
                            case 'explorer':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><SiInternetexplorer /></a></div>);
                            case 'telegram':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><BsTelegram /></a></div>);
                            case 'whitepaper':
                              return (<div className='link-icon' key={index}><a href={item.url} target="_blank"><GiWhiteBook /></a></div>);
                          }
                        }) : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className='row g-3'>
                <div className='col-3'>
                  <div className='card crypto-card-1'>
                    <div className='icon'>
                      <div className='box'>
                        <TbCoinBitcoin />
                      </div>
                    </div>
                    <div className='content'>
                      <div className='ruppe-grow'>
                        <h4 className='fw-semibold'>{coinDetail.numberOfMarkets}</h4>
                      </div>
                      <h6>Number Of Markets</h6>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='card crypto-card-1'>
                    <div className='icon'>
                      <div className='box'>
                        <SiCoinmarketcap />
                      </div>
                    </div>
                    <div className='content'>
                      <div className='ruppe-grow'>
                        <h4 className='fw-semibold'>{coinDetail.numberOfExchanges}</h4>
                      </div>
                      <h6>Number Of Exchanges</h6>
                    </div>
                  </div>
                </div>
                <div className='col-5'>
                  <div className='card crypto-card-1'>
                    <div className='icon'>
                      <div className='box'>
                        <MdCurrencyExchange />
                      </div>
                    </div>
                    <div className='content'>
                      <div className='ruppe-grow'>
                        <h4 className='fw-semibold'>{coinDetail.marketCap}</h4>
                      </div>
                      <h6>Market Cap</h6>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-3'>
              <div className='card h-100 mb-3 common-card d-flex justify-content-between'>
                <div>
                  <h5 className="my-0">Overview</h5>
                  <hr />
                  <p>{coinDetail.description}</p>
                </div>

                <img src={OverView} alt='overview' width="250" />
              </div>
            </div>
            <div className='col-9'>
              <div className='common-card card'>
                <h5 className="my-0">Price Movements</h5>
                <hr />
                <div className='mt-2'>
                  <CoinOverview data={coinDetail.sparkline} 
                  change={coinDetail.change == "0.00" ? '#dbdbdb' : coinDetail.change[0] == '-' ? '#fd1111' : '#12bb6d'} 
                  />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='common-card card'>
                <Link to=""><h5 className="my-0">Exchanges to buy Ethereum</h5></Link>
                <hr />
                <div className=''>
                  <ExchangeToBuy coinId={coinId} />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='common-card card'>
                <h5 className="my-0">Markets</h5>
                <hr />
                <div className=''>
                  <MarketTo coinId={coinId} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </>
  )
}
