import React , {useState} from 'react'
import {Modal} from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'
import { useSelector,useDispatch } from 'react-redux'
const Pizza = ({pizzadata}) => {

const [quantity ,setQuantity] = useState(1)
const [varient,setVarient] = useState('small')

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const dispatch = useDispatch()
function addtocart(){
  dispatch(addToCart(pizzadata,quantity,varient))
}



  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizzadata.name}</h1>
        <img src={pizzadata.image}  
        alt="" className='img-fluid' 
        style={{height:'200px' , width : '200px'}}
        /> </div>

        <div  className='flex-container' >

            <div  className='w-100 m-1'><p>Varients</p>
            <select className='form-control' value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
              {pizzadata.varients.map(varient=>{
                return <option value={varient} >{varient }</option>
              })} 
               </select>
            </div>
            <div  className='w-100 m-1'><p>Quantity</p>
            <select className='form-control' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
               {   [...Array(10).keys()].map((x,i )=>{
                   return <option   value={i+1}>{i+1}</option>
               } )
               }
               </select>
           </div>

        </div>
        <div className="flex-container">
          <div className='m-1  w-100'>
          <h1 className='m-1 w-100'>Price : {pizzadata.prices[0][varient]*quantity} USD</h1>
          </div>
      <div  className='m-1 w-100'>
        <button className='btn'onClick={addtocart} >ADD TO CART</button>
        </div>      
          </div>
                    <Modal show={show}>
            <Modal.Header >
              <Modal.Title>{pizzadata.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src={pizzadata.image} alt='' 
              className='img-fluid'
              style={{height : '300px !important'}}/>
            <p>{pizzadata.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <button className='btn' onClick={handleClose}>Close</button>
            </Modal.Footer>
          </Modal>

    </div>
  )
}

export default Pizza