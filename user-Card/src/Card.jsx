import React from 'react'

const Card = (props) => {

  return (
        <div>
       <div className="card">
       <div>
         <div className='top'>
          <img src="https://imgs.search.brave.com/RMOZ4iWTIWxmPoRZ7hbmtxyGH7ZlruOIK_ADLlXWVQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3NzEy/MjQucG5n" alt="" srcset="" />
          <button>Save</button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
          </div>
        </div>
       </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <h3>{props.location}</h3>
          </div>
          <button>Apply Now</button>

        </div>

      </div>
    </div>
  )
}

export default Card
