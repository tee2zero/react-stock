/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect,useRef, useCallback } from 'react';
// import { getAllProduct,getProdctByLimit } from '../../redux/actions/productActions'
import ProductList from '../product/ProductList'
import { ADD_ITEM_TO_CART} from "../../redux/actions/type";
import api from '../../services/ProductAPI'
import { limitQueryPerPage } from '../../constants/configAxios'

const ReduxCart = () => {
    document.title = "Redux Cart Add Paging"

    // ประกาศตัวแปรแบบ Hook เพื่อเรียก store จาก memory
    // const itemsObj = useSelector(store => store.productReducer)
    // const items = itemsObj.items
    // const [productItems, setProductItems] = useState(items)

    const [productItems, setProductItems] = useState([])

    const dispatch = useDispatch()

    // สำหรับโหลด All product จาก redux action เข้า stroe
    // useEffect(() => {
    //     dispatch(getAllProduct())
    // }, [dispatch])

    const handleAddtoCart = (index) => {
        // console.log(index)
        dispatch({type:ADD_ITEM_TO_CART, payload: productItems[index]})
    }

    // ตัวแปรสำหรับ Infinite Scrolling 
    const [pageNumber, setPageNumber] = useState(0)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const [totalData, setTotalData] = useState(() => {
      api.getProductCount().then(res => {
        setTotalData(res.data)
      })
    })
  
    const observer = useRef()

    const fetchMoreData = useCallback(node => {       
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber(prevPageNumber => prevPageNumber + 1)
          }
        })
        if (node) observer.current.observe(node)
      }, [loading, hasMore])
    
      useEffect(() => {
        setLoading(true);
        setError(false);
        try {
          if (pageNumber * limitQueryPerPage < totalData) {

            api.getProductByLimit(pageNumber).then(res => {
                setProductItems((prevProduct) => {
                  return [
                    ...prevProduct, ...res.data,
                  ];
                })
                setLoading(false)
                setHasMore(true)
              })
          } else {
            setLoading(false)
            setHasMore(false)
          }
        } catch (error) {
          console.error(error.meesage)
          setError(true);
        }
      }, [pageNumber, totalData]);   
      
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
                    handleAddtoCart={handleAddtoCart} 
                    fetchMoreData={fetchMoreData}
                    />
            </div>
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </section>


    )
}

export default ReduxCart
