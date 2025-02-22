import { useEffect, useState } from "react";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getAllCustomers = async() => {
      const response = await fetch('/api/customers');
      const customerArray = await response.json();
      setCustomers(customerArray);
    }
    getAllCustomers();
  }, []);

  return (
    <ol>
      {
        customers.map((oneCustomer) => {
          return <li>{ oneCustomer.name }</li>
        })
      }
    </ol>
  )
}

export default CustomerList;