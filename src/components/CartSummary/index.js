import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const reducer = (previous, current) =>
        previous + current.price * current.quantity
      const totalPrice = cartList.reduce(reducer, 0)
      return (
        <div className="cart-summary-container">
          <div className="items-container">
            <h1 className="order-total">
              Order Total:
              <span className="span-item"> Rs {totalPrice}/- </span>
            </h1>
            <p className="total-items-count">{cartList.length} items in cart</p>
            <button className="checkout-button" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
