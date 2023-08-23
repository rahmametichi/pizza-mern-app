import React , {useState , useEffect} from 'react'
import { useDispatch , useSelector  } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'

export default function Ordersscreen() {
  const dispatch = useDispatch()
   const orderstate = useSelector(state=>state.getUserOrdersReducer)
   
const {orders , error , loading ,success} = orderstate
    useEffect(()=>{
    dispatch(getUserOrders())
    },[])

  return (
    <div>
        
        <h2
         style={{fontSize:'35px'}}>
            My Orders
            </h2>
            <hr/>
            
            <div className="row justify-content-center"   >
        {loading && <Loading/>}
        {error && (<Error error='SOMETHING WENT WRONG'/>)}
       {  orders && orders.map(order=>{
        return <div className="col-md-8 m-2 p-1" style={{backgroundColor : 'red', color:'white'}}>

          <div className="flex-container">

            <div className='text-left w-100 m-1'>
            <h2 style={{fontSize : '25px'}} >Items</h2>
            <hr/>
              {order.orderItems.map(item=>{

                return <div>
                 <p> {item.name} <br/> [{item.varient}] * {item.quantity} = {item.price}
                 </p>  </div>
            }
            )}</div>

            <div className='text-left w-100 m-1'> 
             <h2 style={{fontSize : '25px'}} >Address</h2>
             <hr/> 
                    <p>Street : {order.shippingAdress.street}</p>
                    <p>City : {order.shippingAdress.city}</p>
                    <p>Country : Tunisia</p>
                    <p>Pincode : {order.shippingAdress.pincode}</p>
                    
                    
                    </div>







            <div className='text-left w-100 m-1'> 

                <h2 style={{fontSize : '25px'}}>Order Info</h2>
                <hr/>
                <p>Order Amount : {order.orderAmount}</p>
                <p>Date : {order.createdAt.substring(0,10)}</p>
                <p>Transaction ID : {order.transactionId}</p>
                <p>Order ID : {order._id}</p>


            </div>





          </div>






        </div>

       }) }



            </div>


        
        
        
        </div>
  )
}
