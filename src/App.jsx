import { Routes, Route, Link } from 'react-router-dom';

import CustomerList from './components/Customers.jsx';

const App = () => {

  return (
    <>
      <h1>Front End!</h1>
      <nav>
        <Link to="/customers">See Customers</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/customers" element={<CustomerList />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
