import React, { useEffect, useState } from 'react';
import { Sidebar } from '../Components/Global/Sidebar';
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Outlet } from 'react-router-dom';

export const AdminView = () => {

  const [show, setShow] = useState(true);

  return (
    <div className='admin-container '>
      <Sidebar show={show} />
      <div className={`side-content ${show ? 'show' : null}`}>
        <header>
          <div className='search-toggle'>
            <button className='btn btn-lg' onClick={() => setShow(!show)}><AiOutlineAlignLeft /></button>
            <div className='search-con'>
              <div className='search-icon'>
                <BsSearch />
              </div>
              <input type="text" placeholder='Search...' className="search-input" />
            </div>
          </div>
          <div className='extra-links'>
            <div className='notification'>
              <div className='head-comon-ic'>
                <IoMdNotificationsOutline />
              </div>
            </div>
            <div className='profile'>
              <img src='https://picsum.photos/id/237/200/300' className='profile-img' />
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className='d-flex justify-content-end'>
          <p className='mb-0'>Designed & Developed By Cartoon75</p>
        </footer>
      </div>
    </div>
  )
}
