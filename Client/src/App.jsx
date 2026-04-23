import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Form from './components/form'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form/>} />
      </Routes>
    </div>
  )
}
