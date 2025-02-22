import { Routes, Route, Link } from 'react-router-dom';

import CustomerList from './components/Customers.jsx';
import NewCustomer from './components/NewCustomer.jsx';

const App = () => {

  return (
    <>
      <h1>Front End!</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to="/customers">See Customers</Link>
        <Link to="/newcustomer">Add New Customer</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/newcustomer" element={<NewCustomer />} />
        </Routes>
      </div>
    </>
  )
}

export default App
