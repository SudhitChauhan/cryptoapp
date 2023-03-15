import React from 'react'
import bitcoin from '../../img/bitcoin.png';
import ethereum from '../../img/ethereum.jpg';
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser, FaExchangeAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiNews } from "react-icons/bi";

export const Sidebar = ({ show }) => {
    return (
        <div className={`sidebar ${show ? 'show' : null}`}>
            <div className='logo-con'>
            <Link to='/'><h1>Cr<span>ypt</span>odark</h1></Link>
            </div>
            <div className='side-links'>
                <ul className='side-ul'>
                    <li><Link to='/dashboard/' className='nav-link'><span><RxDashboard /></span><span>Dashboard</span></Link></li>
                    {/* <li><Link to='profile/' className='nav-link'><span><FaRegUser /></span><span>Profile</span></Link></li> */}
                    {/* <li><Link to='exchanges/' className='nav-link'><span><FaExchangeAlt /></span><span>Exchanges</span></Link></li> */}
                    <li><Link to='cryptocurrencies/' className='nav-link'><span><BsCurrencyBitcoin /></span><span>Cryptocurrencies</span></Link></li>
                    <li><Link to='news/' className='nav-link'><span><BiNews /></span><span>News</span></Link></li>
                </ul>
            </div>
            <div className='import-info'>
                <div className='row g-3'>
                    <div className='col-12'>
                    <div className='card crypto-card-1'>
                        <div className='icon'>
                            <img src={bitcoin} alt="bit coin" className='iin' />
                        </div>
                        <div className='content'>
                            <h4>BTC</h4>
                            <div className='ruppe-grow'>
                                <h5>$48,789.50</h5>
                                <div className='grow-box'>
                                    <span className="badge rounded-pill bg-danger"><CgArrowDown />10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-12'>
                    <div className='card crypto-card-1'>
                        <div className='icon'>
                            <img src={ethereum} alt="bit coin" className='iin' />
                        </div>
                        <div className='content'>
                            <h4>Ethereum</h4>
                            <div className='ruppe-grow'>
                                <h5>$8,789.50</h5>
                                <div className='grow-box'>
                                    <span className="badge rounded-pill bg-success"><CgArrowUp />50%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
