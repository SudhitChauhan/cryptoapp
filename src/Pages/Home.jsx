import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <div>Home</div>
    <Link to='dashboard/'>Dashboard</Link>
    </>
  )
}