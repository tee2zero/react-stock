/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { baseURLAPI } from '../../constants/configAxios'
import NumberFormat from 'react-number-format'
import { DELETE_ITEM_FROM_CART, INCREASE_QUANTITY_ITEM_CART, DECREASE_QUANTITY_ITEM_CART, RESET_QUANTITY_ITEM_CART } from "../../redux/actions/type";
import Swal from 'sweetalert2'

const cartDetail = () => {

    const cartObj = useSelector(store => store.cartReducer)
    const items = cartObj.carItems
    const dispatch = useDispatch()
    const imageURL = baseURLAPI.substring(0, baseURLAPI.length - 1)
    let total = 0

    const deleteItem = (product) => {
        let quantity = product.quantity;
        if (quantity === 1) {
            Swal.fire({
                title: 'ยืนยันลบรายการ ?',
                confirmButtonText: 'ยืนยันลบเลย',
                confirmButtonColor: 'red',
                showCancelButton: true,
                cancelButtonText: 'ปิดหน้านี้'
              }).then((result) => {
                if(result.isConfirmed){
                  // alert('ลบแล้ว')
                  dispatch({ type: DELETE_ITEM_FROM_CART, payload: product }) 
                }
              })
        } else {
            dispatch({ type: DECREASE_QUANTITY_ITEM_CART, payload: product })
        }
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="flex my-10 shadow-md">
                <div className="w-3/4 px-10 py-10 bg-white">
                    <div className="flex justify-between pb-8 border-b">
                        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                        <h2 className="text-2xl font-semibold">มีทั้งหมด {items.length} รายการ</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="w-2/5 text-xs font-semibold text-gray-600 uppercase">Product Details</h3>
                        <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Quantity</h3>
                        <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Price</h3>
                        <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Total</h3>
                    </div>

                    {/*  Loop สินค้า */}
                    {
                        items.map((product, index) => {
                            total = total + (product.quantity * product.price)
                            return (
                                <div className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100" key={index}>
                                    <div className="flex w-2/5"> {/* product */}
                                        <div className="flex-shrink-0 w-48 h-48">
                                            {
                                                product.image ?
                                                    <img
                                                        className="w-48 h-48 rounded-full"
                                                        src={imageURL + product.image.url}
                                                        alt=""
                                                    />
                                                    :
                                                    <img
                                                        className="w-48 h-48 rounded-full"
                                                        src="/assets/images/noimg.jpg"
                                                        alt=""
                                                    />
                                            }
                                        </div>

                                        <div className="flex flex-col justify-between flex-grow ml-4">
                                            <span className="text-sm font-bold">{product.title}</span>
                                            <span className="text-xs text-gray-500 small"> {product.description}</span>
                                            <br />
                                            <a href="#delete" className="text-base font-semibold text-red-500 hover:text-red-500"
                                                onClick={() => { dispatch({ type: DELETE_ITEM_FROM_CART, payload: product }) }}>Remove</a>


                                        </div>
                                    </div>

                                    <span className="w-1/5 text-sm font-semibold text-center">
                                        <button onClick={() => deleteItem(product)}>
                                            <svg className="w-3 text-gray-600 fill-current" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>

                                        <span className="w-8 mx-2 text-center border">{product.quantity}</span>
                                        <button onClick={() => { dispatch({ type: INCREASE_QUANTITY_ITEM_CART, payload: product }) }}>
                                            <svg className="w-3 text-gray-600 fill-current" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>
                                    </span>


                                    <span className="w-1/5 text-sm font-semibold text-center">
                                        <NumberFormat value={product.price} fixedDecimalScale={true} decimalScale={0} thousandSeparator={true} displayType={'text'} />
                                    </span>
                                    <span className="w-1/5 text-sm font-semibold text-center">
                                        <NumberFormat value={product.quantity * product.price} fixedDecimalScale={true} decimalScale={0} thousandSeparator={true} displayType={'text'} />
                                    </span>
                                </div>
                            )
                        })
                    }

                    <NavLink className="flex mt-10 text-sm font-semibold text-indigo-600 nav-link" to="/redux">
                        <svg className="w-4 mr-2 text-indigo-600 fill-current" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </NavLink>
                </div>
                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="pb-8 text-2xl font-semibold border-b">Order Summary</h1>
                    <div>
                        <label className="inline-block mb-3 text-sm font-medium uppercase">Shipping</label>
                        <select className="block w-full p-2 text-sm text-gray-600">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="inline-block mb-3 text-sm font-semibold uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="w-full p-2 text-sm" />
                    </div>
                    <button className="px-5 py-2 text-sm text-white uppercase bg-red-500 hover:bg-red-600">Apply</button>
                    <div className="mt-8 border-t">
                        <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                            <span>Total cost</span>
                            <span>
                                <NumberFormat value={total} fixedDecimalScale={true} decimalScale={0} thousandSeparator={true} displayType={'text'} /> บาท
                            </span>
                        </div>
                        <button className="w-full py-3 text-sm font-semibold text-white uppercase bg-indigo-500 hover:bg-indigo-600" 
                        onClick={() => { dispatch({ type: RESET_QUANTITY_ITEM_CART}) }}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default cartDetail
