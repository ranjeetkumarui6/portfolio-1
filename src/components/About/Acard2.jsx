import React from 'react'
import './acard2.css'
const Acard2 = (props) => {
  return (
    <>
       <div className="col  acard2" style={{width:props.w}}>
        <span>{props.exp}</span>
        <h5>{props.blue}</h5>
        <p>{props.date}</p>
        <span>{props.design}</span>
        <p>{props.freelancer}</p>
        <h5>{props.mobile}</h5>
        <p>{props.present}</p>
        <span>{props.designer}</span>
        <h5>{props.diploma}</h5>
        <p>{props.in}</p>
            </div>
    </>
  )
}

export default Acard2