import React, { useEffect } from 'react';
import { VscVerifiedFilled, VscUnverified } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { ExchangeData } from '../../Services/Apis/CryptoApi';

export const ExchangeToBuy = ({ coinId }) => {

    const ExchangesList = useSelector(state => state.exchange.exchanges);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ExchangeData(coinId));
    }, [])

    return (
        <>
            {
                ExchangesList ? (
                    <table className="table coin-table">
                        <thead>
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Coin</th>
                                <th scope="col">Price</th>
                                <th scope="col"><div className="text-center">Num Mark</div></th>
                                <th scope='col'><div className="text-center">Recommended</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ExchangesList.slice(0, 5).map((item) => (
                                    <tr>
                                        <td>{item.rank}</td>
                                        <td>
                                            <div className='d-flex tab-div'>
                                                <div className='icon'>
                                                    <img src={item.iconUrl} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.price}</td>
                                        <td><div className="text-center">{item.numberOfMarkets}</div></td>
                                        <td>
                                            {
                                                item.recommended ? (
                                                    <div className='text-success fs-3 text-center'>
                                                        <VscVerifiedFilled />
                                                    </div>
                                                ) : (
                                                    <div className='text-dark fs-3 text-center'>
                                                        <VscUnverified />
                                                    </div>
                                                )
                                            }

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                ) : null
            }

        </>
    )
}
