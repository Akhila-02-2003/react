import React from 'react'
import {  MobileData} from '../Data/Mobile'
import { Link } from 'react-router-dom';
function Mob() {
  const shortdata=MobileData.slice(0,3);
  return (
    <div  style={{display:'flex',justifyContent:'space-around',alignItems:'center', border:'2px solid'}}>
      {
        shortdata.map((e)=>{
          
            return (
              <Link to={`/mobiledet/${e.id}`}>
                <div style={{backgroundColor:'antiquewhite' ,border:'1px solid',color:'black'}}>
                <img src={e.Images} alt="" style={{width:'300px',height:'300px'}}/>
                <p style={{textAlign:'center',color:'black'}}>id:{e.id}</p>
                <p style={{textAlign:'center',color:'black'}}>Brand:{e.Brand}</p>
                <p style={{textAlign:'center',color:'black'}}>Model:{e.Model}</p>
                <p style={{textAlign:'center',color:'black'}}>Price:{e.Price}</p>
                </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default Mob
