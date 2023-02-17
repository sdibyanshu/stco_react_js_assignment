import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";



const Home = () => {
    const [user, SetUser] = useState([]);
    const APiLink = "https://fakestoreapi.com/products";
    
  
    useEffect(() => {
      async function fetchAPI() {
        await fetch(APiLink)
          .then((res) =>  res.json())
          .then((res) => SetUser(res))
          .catch((err) => console.log(err));
      }
      fetchAPI();
    }, []);

    console.log(user);
    return (
      <>
           <h1>Products Page</h1>
           <div id={styles.main}>
           {user?.map((el) => (
               <div key={el.id}>
                 <h5>{el.title}</h5>
                 <img src={el.image} alt="products" />
                 `Rating: ${el.rating.rate}, ${el.rating.count}`;

                 <p>{el.description}</p>
                 <p>{el.category}</p>
                 <p>{el.price}</p>
                 
               </div>
             ))}
           </div>
      
        </>
    );
  };
  
  export default Home;