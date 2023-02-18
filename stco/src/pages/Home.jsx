
import styles from "../styles/Home.module.css";

import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAlldata } from "../redux/homepage/homepage.action";


function Home() {
  const { data, isLoading, isError } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const handlechange=(event)=>{
      const target=event.target
      const name=target.name
      const value=target.value;
      alert(`${name} ${value}`)
   }

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
      <div id={styles.container}>

        <div id={styles.filter}>
        <h4>Filter</h4>
          <label class="container">Electronics
            <input type="checkbox"  name="category" value="Electronics" onChange={handlechange}/>
          </label>
          
          <label class="container">Jwellary
            <input type="checkbox" name="category" value="jwellary" onChange={handlechange}/>
          </label>

          <label class="container">Mens clothing
            <input type="checkbox" name="category" value="mensclothing" onChange={handlechange}/>
          </label>

          <label class="container">Womens clothing
            <input type="checkbox" name="category" value="womensclothing" onChange={handlechange}/>
          </label>
        </div>

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
      </div>
    </>
  );
}

export default Home;


