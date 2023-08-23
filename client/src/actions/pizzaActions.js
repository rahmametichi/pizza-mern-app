
import axios from 'axios'

export const getAllPizzas =()=>async dispatch=>{
    dispatch({type :'GET_PIZZAS_REQUEST'})

    try {
        const response= await axios.get('http://localhost:5000/api/pizzas/getallpizzas')
        console.log(response.data.data)
        dispatch({type :'GET_PIZZAS_SUCCESS' , payload : response.data.data})
        
    }
    catch(error){
        dispatch({type :'GET_PIZZAS_FAILED' , payload : error})
    }
}