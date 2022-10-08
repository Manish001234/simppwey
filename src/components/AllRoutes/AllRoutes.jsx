import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Grid from '../Grid'
import Sidebar from '../Sidebar/Sidebar'

const AllRoutes = () => {
  return (
    <div>
   
        <Routes>
            <Route path='/product' element={<Grid/>}/>
            <Route path='/' element={<Sidebar/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes