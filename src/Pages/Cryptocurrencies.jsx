import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { coinsData } from '../Services/Apis/CryptoApi';
import { CoinCard } from '../Components/CoinCard';

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
          <h5 className='mt-4'>Cryptocurrencies</h5>
          <div className='row g-4'>
            {
              coinsList ? coinsList.map((item) => (
                <div className='col-3' key={item.uuid}>
                  <CoinCard item={item}/>
                </div>
              )) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
