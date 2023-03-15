import React from 'react';
import { BsBoxArrowRight } from "react-icons/bs";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import millify from 'millify';
import { Link } from 'react-router-dom';

export const CoinCard = ({ item }) => {
    return (
        <div className='card crypto-card-2'>
            <div className='d-flex gap-3 mt-2'>
                <div className='grow-box'>
                    {item.change[0] == "-" ? (
                        <span className="badge rounded-pill bg-danger"><CgArrowDown />{item.change}%</span>
                    ) : (
                        <span className="badge rounded-pill bg-success"><CgArrowUp />{`+${item.change}%`}</span>
                    )}
                </div>
                <div className='icon'>
                    <img src={item.iconUrl} alt='coin' />
                </div>
                <div className='flex-grow-1 align-self-center'>
                    <hr />
                </div>
            </div>
            <h4 className='mt-3 fw-semibold'>{item.rank}.{item.name}</h4>
            <div className='d-flex mb-2 justify-content-between align-items-center'>
                <h6 className='mb-0'>PR : {item.price}</h6>
                <Link to={`/dashboard/crypto/${item.uuid}`} className='btn py-1 details-btn'>
                    <BsBoxArrowRight />
                </Link>
            </div>
        </div>
    )
}
