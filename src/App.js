// import { useState , useEffect } from 'react';
// import axios from "axios";
//
// function App() {
//   const [ count , setCount ] = useState(5);
//   const [ items , setItems] = useState([]);
//   const [resurceType , setResurceType] = useState("Posts");
//   const [windowidth , setwindoWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resurceType}`)
//     .then((response)=>response.json())
//     .then((json)=>setItems(json))
//   }, [resurceType]);
//     // useEffect(async () => {
//     //   await axios.get(`https://jsonplaceholder.typicode.com/${resurceType}`)
//     // })
//
//   function decrementCount() {
//     setCount(count-1)
//   }
//   function incrementCount() {
//     setCount(count+1)
//   }
//   function changeCount(amount) {
//     setCount (count + amount)
//   }
//   return (
//     < div className="App">
//       <div>
//         {windowidth}
//       </div>
//     <div className="App-logo">
//     <button className="buttona" onClick={() => changeCount (-1)}>-</button>
//     <span>{ count}</span>
//     <button className="buttona" onClick={incrementCount}>+</button>
//     </div>
//     <div className="App-logo">
//     <button className="button" onClick={()=> setResurceType("posts")}>Posts</button>
//     <button className="button" onClick={()=> setResurceType("Users")}>Users</button>
//     <button className="button" onClick={()=> setResurceType("Comments")}>Comments</button>
//     </div>
//     <h1>{resurceType}</h1>
//     {items.map(item => {
//       return <pre>
//         {JSON.stringify(item)}
//       </pre>
//     })}
//     </div>
//
//   );
// }
//
//
// export default App;
//
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

function App(){
  return(
      <>
    <Counter initialCount={0} />
    <CounterHooks initialCount={0} />
      </>
  )
}
export default App;