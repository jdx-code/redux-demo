import React from 'react'

const Header = (props) => {

    console.warn('header', props)

  return (
    <div>
        <span>{props.cartData.length}</span>
        <h1>Header Component</h1>    
    </div>    
  )
}

export default Header