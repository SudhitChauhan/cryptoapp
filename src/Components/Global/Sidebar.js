import React from 'react'
import bitcoin from '../../img/bitcoin.png';
import ethereum from '../../img/ethereum.jpg';
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser, FaExchangeAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { useSelector } from 'react-redux';

export const Sidebar = ({ show }) => {

    const newCoins = useSelector(state => state.globalState.newestCoins);

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
        </div>
    )
}
