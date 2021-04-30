/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllProduct } from '../../redux/actions/productActions'
import ProductList from '../product/ProductList'
import { ADD_ITEM_TO_CART} from "../../redux/actions/type";

const ReduxCart = () => {
    document.title = "Redux Cart"

    const itemsObj = useSelector(store => store.productReducer)
    const items = itemsObj.items
    const [productItems, setProductItems] = useState(items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])

    const handleAddtoCart = (index) => {
        // console.log(index)
        dispatch({type:ADD_ITEM_TO_CART, payload: productItems[index]})
    }
    return (
        <section className="py-8 bg-white">
            <div className="container flex flex-wrap items-center mx-auto my-auto">
                <nav id="store" className="top-0 z-30 w-full px-6 py-1">
                    <div className="container flex flex-wrap items-center justify-between w-full px-2 py-3 mx-auto mt-0">
                        <a className="text-xl font-bold tracking-wide text-gray-800 no-underline uppercase hover:no-underline " href="#">
                            Store
                        </a>
                        <div className="flex items-center" id="store-nav-content">
                            <a className="inline-block pl-3 no-underline hover:text-black" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                </svg>
                            </a>
                            <a className="inline-block pl-3 no-underline hover:text-black" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>

                <ProductList
                    products={productItems}
                    handleAddtoCart={handleAddtoCart} />
            </div>
        </section>


    )
}

export default ReduxCart
