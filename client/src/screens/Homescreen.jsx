import React, { useEffect } from "react";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import img from "../assets/cover-bottega.jpg"


const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;
console.log(pizzas.data)
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div >
      <img src={img} style={{height:"500px" , width:'100%' , marginBottom : '50px' , borderRadius : "8px"}} />
      <h4>WELCOME TO THE PIZZA NUMBER 1 IN TUNISIA</h4>
        <h6>SINCE 1990</h6>
      <div className="row justify-content-center" >
        {loading ? (
          <Loading/>
        ) :
         error ? (
          <Error error={console.log(error)}/>
        ) :
         ( 
          pizzas.map(pizza=> {
              return (
                  
              <div className="col-md-3"  key={pizza._id}>
                <div>
                  <Pizza pizzadata={pizza} />
                 { console.log(pizza.name )}
                </div>
              </div>
            );
          }) 
        )}
      </div>
    </div>
  );
};

export default Homescreen;
