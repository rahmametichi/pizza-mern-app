 
 import React from 'react'
 
 export default function Loading() {
   return (
    <div className="spinner-border text-danger" role="status"
    style={{height : '80px',width:'80px',marginTop:'100px'}}>
    <span className="sr-only">Loading...</span>
  </div>
   )
 }
 