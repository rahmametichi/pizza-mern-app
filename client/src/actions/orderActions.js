
import axios from 'axios'


export const placeOrder=(token, subtotal) => async(dispatch, getState) => { 

    const currentUser = getState().loginUserReducer.currentUser
    console.log(currentUser)

    const cartItems = getState().cartReducer.cartItems

dispatch({
    type : 'PLACE_ORDER_REQUEST'
})

try {

 const response = await axios.post('http://localhost:5000/api/orders/placeorder' , {token,subtotal ,currentUser,cartItems }, {headers: {"Access-Control-Allow-Origin":"*"}})
    dispatch({
        type : 'PLACE_ORDER_SUCCESS' , payload : response.data.data    })
    console.log('POST REQUEST',response.data.data)
}
catch(error){
       dispatch({
        type : 'PLACE_ORDER_FAILED'
    })

}

}

export const getUserOrders =()=>async (dispatch,getState)=>{
    
    // const currentUser= getState.loginUserReducer.currentUser
    const user = localStorage.getItem("currentUser")
    const userid=JSON.parse(user)._id

    dispatch({type :'GET_USER_ORDERS_REQUEST'})

    try {
        const response= await axios.get(`http://localhost:5000/api/orders/getuserorders/${userid}`)
        console.log('GET REQUEST',response.data.data)
        dispatch({type :'GET_USER_ORDERS_SUCCESS' , payload : response.data.data})
        
    }
    catch(error){
        dispatch({type :'GET_USER_ORDERS_FAILED' , payload : error})
    }
}