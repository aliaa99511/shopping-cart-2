import React from 'react'
import Itemcart from './Itemcart'
import data from './data'




const Home = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>    

    <h1 className="text-center mt-3">All items</h1>
    <br/>
    <br/>

    <section className="py-4 container">
        <div className="row justify-content-center">

            {data.productData.map((item , index)=>{
                return(
                    <Itemcart img={item.img}
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                    />

                )
            })}

        </div>
    </section>
    </>
  );
}

export default Home;
