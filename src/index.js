import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const [selected, setSelected] = useState([]);

//   const toggleTopping = ({ target }) => {
//     const clickedTopping = target.value;
//     setSelected((prev) => {
//       // check if clicked topping is already selected
//       if (prev.includes(clickedTopping)) {
//         // filter the clicked topping out of state
//         return prev.filter((t) => t !== clickedTopping);
//       } else {
//         // add the clicked topping to our state
//         return [clickedTopping, ...prev];
//       }
//     });
//   };

//   return (
//     <div>
//       {options.map((option) => (
//         <button value={option} onClick={toggleTopping} key={option}>
//           {selected.includes(option) ? "Remove " : "Add "}
//           {option}
//         </button>
//       ))}
//       <p>Order a {selected.join(", ")} pizza</p>
//     </div>
//   );
// }
