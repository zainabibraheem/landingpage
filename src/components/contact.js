import React from 'react'

const Contact = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.phone}</p>
      <p>{props.email}</p>

    </div>
  )
}

export default Contact
