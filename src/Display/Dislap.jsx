import React from 'react'

import { LaptopData } from '../Data/Laptop';
import { Link } from 'react-router-dom';
function Dislap() {
  return (
    <div className='container-fluid'style={{display:'flex',flexWrap:'wrap'}}>
      {
        LaptopData.map((e=>{
            return(
             <Link to = {`/laptopdet/${e.id}`}>
                <div>
                <div style={{backgroundColor:'antiquewhite',border:'2px solid black',marginLeft:'70px'}}>
                <img src={e.Images} alt="" style={{width:'300px',height:'280px'}}/>
                <p style={{textAlign:'center',color:'black'}}>id:{e.id}</p>
                <p style={{textAlign:'center',color:'black'}}>Brand:{e.Brand}</p>
                <p style={{textAlign:'center',color:'black'}}>Model:{e.Model}</p>
                <p style={{textAlign:'center',color:'black'}}>Price:{e.Price}</p>
                <button style={{justifyContent:'center',marginLeft:'90px'}}>Add to cart</button>
                </div>
                </div>
                </Link>
                
            )

            
        }
        ))
      }
    </div>
  )
}

export default Dislap
