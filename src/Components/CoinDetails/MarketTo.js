import React, { useEffect } from 'react';
import { VscVerifiedFilled, VscUnverified } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { MarketsData } from '../../Services/Apis/CryptoApi';

export const MarketTo = ({ coinId }) => {

    const MarketList = useSelector(state => state.markets.markets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MarketsData(coinId));
    }, [])

    return (
        <>
            {
                MarketList ? (
                    <table className="table coin-table">
                        <thead>
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Exchange</th>
                                <th scope="col">Price</th>
                                <th scope="col"><div className="text-center">Market Share</div></th>
                                <th scope='col'><div className="text-center">Recommended</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MarketList.slice(0, 5).map((item) => (
                                    <tr>
                                        <td>{item.rank}</td>
                                        <td>
                                            <div className='d-flex tab-div'>
                                                <div className='icon'>
                                                    <img src={item.exchange.iconUrl} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.price}</td>
                                        <td><div className="text-center">{item.marketShare}</div></td>
                                        <td>
                                            {item.recommended ? (
                                                <div className='text-success fs-3 text-center'>
                                                    <VscVerifiedFilled />
                                                </div>
                                            ) : (
                                                <div className='text-dark fs-3 text-center'>
                                                    <VscUnverified />
                                                </div>
                                            )}

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
