import React from 'react'

export const TestimonialCard = (props) => {
  return (
    <div className="productList">
    <div key={props.id} className="productCardd">
      <div className="productCard__content">
        <h3 className="productNamE">{props.name}</h3>
        <div className="displayStack__2">
         {props.statement}
         </div>
         <div className="displayStack__3">
         {props.author}
        </div>
      </div>
    </div>
  </div>
  )
}
