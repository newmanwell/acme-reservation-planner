import { useState } from "react";

const NewCustomer = () => {
  const [name, setName] = useState("");

  const addCustomer = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/customers', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name
      })
      });
      const newCustomer = response.json();
      setName("");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>New Customer Form</h2>
      <form onSubmit={addCustomer}>
        <input placeholder="name" onChange={(event) => {setName(event.target.value)}} value={name} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default NewCustomer;