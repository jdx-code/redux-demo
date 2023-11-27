import {connect} from 'react-redux'
import { addToCart } from '../services/actions/action'
import Home from '../components/Home'

const mapStateToProps = state => ({
    cartData: state.cartItems
})

const mapDispatchToProp = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProp)(Home)

//export default Home