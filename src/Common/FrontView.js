import React from 'react'
import { Header } from '../Components/Global/Header';
import { Footer } from '../Components/Global/Footer';
import { Outlet } from 'react-router-dom';

export const FrontView = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
