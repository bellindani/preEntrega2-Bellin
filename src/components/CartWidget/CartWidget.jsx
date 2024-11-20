import CartIcon from '../../assets/cartwidget.svg'
import './CartWidget.css'

function CartWidget() {

  return (
    <div className='cartWidget'>
        <img src={CartIcon} alt="Logo" width={40}/>
        <div className='counter'>
            <span className='number'>5</span>
        </div>
    </div>
  )
}

export default CartWidget
