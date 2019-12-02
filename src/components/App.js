import React from 'react'
import Button from '@material-ui/core/Button'
import Footer from './Footer'
import Header from './Header'
import Login from './Login'
import Table from '../containers/Table'

import DatePicker from './DatePicker'
const App = () => (
    <div>
      <Header />
      <DatePicker />
      <Table />
      <Login />
      <Footer />
    </div>
)

export default App