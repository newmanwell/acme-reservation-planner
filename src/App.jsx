import { Routes, Route } from 'react-router-dom';

import CustomerList from './components/Customers.jsx';

const App = () => {

  return (
    <>
      <h1>Front End!</h1>
      <nav>
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
