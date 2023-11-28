import {connect} from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = state => ({
    cartData: state.cartItems
})

const mapDispatchToProp = dispatch => ({    
})

export default connect(mapStateToProps, mapDispatchToProp)(Header)