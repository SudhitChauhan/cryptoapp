import React from 'react'
import moment from 'moment'
import { BsBoxArrowRight } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const demoImage = 'https://picsum.photos/id/237/100/100';

export const NewsCard = ({ item }) => {
  return (
    <div className='card news-card'>
        <div className="d-flex gap-3">
            <div className=''>
                <img src={item?.image?.thumbnail?.contentUrl || demoImage} className="news-image" />
                </div>
            <div className='header align-self-center'>
                <p className='mb-0'>{item?.datePublished ? moment(item?.datePublished).format('Do MMMM YYYY') : null}</p>
                <h6>{item.name}</h6>
            </div>
        </div>
        <hr/>
        <p className='mt-2 description'>{item.description}</p>
        <div className='d-flex justify-content-between'>
            <div className='d-flex align-item-center provider'>
                <div className='icon'>
                    {
                        item?.provider[0]?.image ? (<img src={item?.provider[0]?.image?.thumbnail?.contentUrl}/>) : (<FaUserCircle />)
                    }
                </div>
                <h6 className='mb-0'>{item?.provider[0].name}</h6>
            </div>
            <a href={item.url} target="_blank" className='btn py-1 details-btn'>
                    <BsBoxArrowRight />
                </a>
        </div>
    </div>
  )
}
