import React from 'react'
import ethereum from '../img/ethereum.jpg';
import bitcoin from '../img/bitcoin.png';
import { CgArrowUp, CgArrowDown } from "react-icons/cg";

export const Dashboard = () => {
  return (
    <>
      <div className='row g-3'>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <img src={ethereum} alt="bit coin" className='iin' />
            </div>
            <div className='content'>
            <div className='ruppe-grow'>
                <h4 className='fw-semibold'>1545</h4>
              </div>
              <h6>Total Market Cap</h6>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <img src={ethereum} alt="bit coin" className='iin' />
            </div>
            <div className='content'>
            <div className='ruppe-grow'>
                <h4 className='fw-semibold'>1545</h4>
              </div>
              <h6>Total 24h Volume</h6>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <img src={ethereum} alt="bit coin" className='iin' />
            </div>
            <div className='content'>
            <div className='ruppe-grow'>
                <h4 className='fw-semibold'>1545</h4>
              </div>
              <h6>Total Cryptocurrencies</h6>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card crypto-card-1'>
            <div className='icon'>
              <img src={ethereum} alt="bit coin" className='iin' />
            </div>
            <div className='content'>
            <div className='ruppe-grow'>
                <h4 className='fw-semibold'>1545</h4>
              </div>
              <h6>Total Exchanges</h6>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
