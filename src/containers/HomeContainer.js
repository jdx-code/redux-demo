import {connect} from 'react-redux'
import { addToCart, removeFromCart } from '../services/actions/action'
import Home from '../components/Home'

const mapStateToProps = state => ({
    cartData: state.cartItems
})

const mapDispatchToProp = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart())

})

export default connect(mapStateToProps, mapDispatchToProp)(Home)

//export default Home