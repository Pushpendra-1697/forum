import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from './Project'
import Task from './Task'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/task' element={<Task />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes