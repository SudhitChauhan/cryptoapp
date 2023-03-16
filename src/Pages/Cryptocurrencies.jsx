import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { coinsData } from '../Services/Apis/CryptoApi';
import { CoinCard } from '../Components/CoinCard';
import { BsSearch } from "react-icons/bs";

export const Cryptocurrencies = () => {

  const coinsList = useSelector(state => state.coins.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinsData());
  }, []);

  return (
    <div className='row g-3'>
      <div className='col-12'>
        <div className='common-card mb-5'>
          <div className='d-flex justify-content-between mb-4'>
            <h5 className='mb-2 mt-3'>Cryptocurrencies</h5>
            <div className='search-con d-none'>
              <div className='search-icon'>
                <BsSearch />
              </div>
              <input type="text" placeholder='Search...' className="search-input" />
            </div>
          </div>
          <div className='row g-4'>
            {
              coinsList ? coinsList.map((item) => (
                <div className='col-3' key={item.uuid}>
                  <CoinCard item={item} />
                </div>
              )) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
