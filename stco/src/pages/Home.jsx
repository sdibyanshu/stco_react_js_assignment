
import styles from "../styles/Home.module.css";

import React, {useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAlldata } from "../redux/homepage/homepage.action";


function Home() {
  const { data, isLoading, isError } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlldata());
  }, []);

  console.log(data);

  if (isLoading) {
    return <>...loading</>;
  }
  if (isError) {
    return <>...Error</>;
  }

  return (
    <>
     <h1>Products Page</h1>
           <div id={styles.main}>
           {data.map((el) => (
               <div key={el.id}>
                 <h5>{el.title}</h5>
                 <img src={el.image} alt="products" />
               <h6>Rating: {el.rating.rate} Count: {el.rating.count}</h6>

                 <h4>{el.category}</h4>
                 <h1>Price : Rs {el.price}</h1>
                 
               </div>
             ))}
           </div>
    </>
  );
}

export default Home;


