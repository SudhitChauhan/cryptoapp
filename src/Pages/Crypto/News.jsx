import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsData } from '../../Services/Apis/CryptoApi';
import { NewsCard } from '../../Components/NewsCard';

export const News = () => {

  const newsList = useSelector(state => state.news.articles)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsData())
  }, [])

  return (
    <div className='row g-3'>
    <div className='col-12'>
      <div className='common-card mb-5'>
        <h5 className='mt-4'>News</h5>
        <div className='row g-4'>
          {
            newsList ? newsList.map((item, index) => (
              <div className='col-4' key={index}>
                <NewsCard item={item}/>
              </div>
            )) : null
          }
        </div>
      </div>
    </div>
  </div>
  )
}
