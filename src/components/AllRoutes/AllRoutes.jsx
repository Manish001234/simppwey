import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Sidebar/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes