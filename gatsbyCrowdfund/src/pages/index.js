import React, { useContext } from 'react';
import ReactDOM from 'react-dom';


import authContext from '../components/authContext';
import { App } from '../components/App';



import { Link } from "gatsby";
import JSONData1 from "../../content/My-JSON-Content.json"

import JSONDataAuthors from "../../content/Authors.json"
import JSONDataBooks from "../../content/Books.json"

const user = {
  email: 'vova@mail.com',
  firstName: 'Vova',
  lastName: 'Ivanov',
  avatarUrl: "user.png"
};


console.log(JSONDataBooks)
console.log(JSONDataAuthors)

const Privet = () => (
  <authContext.Provider value={user}>
    <App books={JSONDataBooks} authors={JSONDataAuthors} />
  </authContext.Provider>
)

export default Privet





// ReactDOM.render(
    // <authContext.Provider value={user}>
    //     <App books={JSONDataBooks} authors={JSONDataAuthors}/>
    // </authContext.Provider>,
//     document.getElementById('root')
// );

// const Privet = () => (
//   <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
//     <h1>{JSONData1.title}</h1>
//     <ul>
//       {JSONData1.content.map((data, index) => {
//         return <li key={`content_item_${index}`}>{data.item}</li>
//       })}
//     </ul>
//   </div>
// )