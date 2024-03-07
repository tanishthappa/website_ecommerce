import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);

  const apiCall = async()=>{
      setloading(true);
      const response = await fetch("https://65dd8ec9e7edadead7ee3cd0.mockapi.io/clothing1");
      let responseData = await response.json();

      
      setfilter(responseData);  
      setdata(responseData);  
      setloading(false);

    }
    console.log('ye mera filter',filter);

  useEffect(() => {
    apiCall();
  }, []);
  
  const Loading = () => {
    return (
      <>
      Loading...
      </>
    )
  };


  const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category === cat);
    setfilter(updatedList);
  }
  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" style={{color:'#2D9596'}}onClick={()=>setfilter(data)}> All</button>
          <button className="btn btn-outline-dark me-2" style={{color:'#2D9596'}}onClick={()=>filterProduct("men")}> Men's Clothing</button>
          <button className="btn btn-outline-dark me-2 "style={{color:'#2D9596'}} onClick={()=>filterProduct("women")}>
            Women's Clothing
          </button>
          
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id} >
                  <img src={product.image1} className="card-img-top" alt={product.category} height="250px"/>
                  {console.log(product.image1)}
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.name}...</h5>
                    <p class="card-text lead fw-bold">
                     ${product.new_price}
                    </p>
                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-success">BUY NOW</NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5  " >
        <div className="row">
          <div className="col-12 mb-5 pb-5">
            <h1 className=" fw-bolder text-start " style={{color:'#265073' }}>Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-start">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
  };


export default Products




