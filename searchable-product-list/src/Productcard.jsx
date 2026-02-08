import React from 'react'

const Productcard = (props) => {
  return (
    <div>
<img src={props.images}  />
<h3>{props.availabilityStatus}</h3>
<h1>{props.brand}</h1>
<h2>{props.price}</h2>

      
    </div>
  )
}

export default Productcard
