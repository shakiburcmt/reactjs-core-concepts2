import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(18);
  // shortcut way
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // ektu boro kore kora hoyeche
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div className="counter">
      <h1>Count : {count}</h1>
      {/* dynamic korar somoy function call kora jabe na */}
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>Length is: {users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: "2px solid coral", margin: '20px', borderRadius: '20px', backgroundColor: "powderBlue" }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;

/* just recap from previous
const products = [
    { name: 'laptop', price: 50000 },
    { name: 'phone', price: 10000 },
    { name: 'watch', price: 8000 },
    { name: 'shirt', price: 500 }
  ];

dynamically declaration here
{
  products.map(arr => <Product name={arr.name} price={arr.price}></Product>)
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
*/
