import React from 'react'
import { Route , Routes } from 'react-router-dom'
import AllPage from '../Pages/SidePage/AllTodo'
import CompletedTodo from '../Pages/SidePage/CompletedTodo'

import CreateTodo from '../Pages/SidePage/CreateTodo'
import FavoriteTodo from '../Pages/SidePage/FavoriteTodo'
import ImportantTodo from '../Pages/SidePage/ImportantTodo'
import WelcomePage from '../Pages/SidePage/WelcomeTodo'

const HomeRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/important-todo' element={<ImportantTodo />} />
            <Route path='/completed-todo' element={<CompletedTodo />} />
            <Route path='/all-todo' element={<AllPage />} />
            <Route path='/create-todo' element={<CreateTodo />} />
            <Route path='/favorite-todo' element={<FavoriteTodo />} />
        </Routes>
    </>
  )
}

export default HomeRoutes