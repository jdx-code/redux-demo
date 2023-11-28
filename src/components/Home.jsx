import React from 'react'

const Home = (props) => {

    console.warn('home', props)

  return (
    <div>        
      <h1>Home Component</h1>
      
      <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => props.addToCartHandler({price: 1000, name: 'I-Phone'})}
                    >
                        Add To Cart
                    </button>

                    <button
                        className="btn-remove-cart"
                        onClick={() => props.removeFromCartHandler()}
                    >
                        Remove From Cart
                    </button>
                </div>
            </div>
    </div>    
  )
}

export default Home