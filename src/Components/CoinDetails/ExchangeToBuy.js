import React from 'react';
import { VscVerifiedFilled, VscUnverified } from "react-icons/vsc";

export const ExchangeToBuy = () => {
    return (
        <table className="table coin-table">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Price</th>
                    <th scope="col">24hVolume</th>
                    <th scope='col'><div className="text-center">Recommended</div></th>
                </tr>
            </thead>
            <tbody>
                {/* {
              coinsList.slice(0, 9).map((item) => ( */}
                <tr>
                    <td>2</td>
                    <td>
                        <div className='d-flex tab-div'>
                            <div className='icon'>
                                <img src='https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg' />
                            </div>
                        </div>
                    </td>
                    <td>24777.514694</td>
                    <td>1290894131.867648</td>
                    <td>
                        <div className='text-success fs-3 text-center'>
                            <VscVerifiedFilled />
                        </div>
                    </td>
                </tr>
                {/* ))
            } */}

            </tbody>
        </table>
    )
}
