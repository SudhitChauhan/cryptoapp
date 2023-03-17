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
import Accordion from 'react-bootstrap/Accordion';

export const Sidebar = ({ show }) => {

    const newCoins = useSelector(state => state.globalState.newestCoins);

    return (
        <div className={`sidebar ${show ? 'show' : null}`}>
            <div className='logo-con'>
                <Link to='/'><h1 className='mb-0 mt-2'>He<span>llo</span>World</h1></Link>
            </div>
            <div className='side-links'>
                <Accordion>
                    <ul className='side-ul'>
                        <li><Link to='/dashboard/' className='nav-link'><span><RxDashboard /></span><span>Dashboard</span></Link></li>
                        <li>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className='me-3'><BsCurrencyBitcoin /></span>Crypto</Accordion.Header>
                                <Accordion.Body>
                                    <ul className='child-ul'>
                                        <li><Link to='/crypto/home' className='nav-link'><span>Home</span></Link></li>
                                        <li><Link to='/crypto/cryptocurrencies/' className='nav-link'><span>Cryptocurrencies</span></Link></li>
                                        <li><Link to='/crypto/news/' className='nav-link'><span>News</span></Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                    </ul>
                </Accordion>

            </div>
        </div>
    )
}
