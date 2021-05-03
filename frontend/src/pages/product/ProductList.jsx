import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {

    const { products, handleAddtoCart, fetchMoreData } = props

    return (
        <>
            {
                products.map((item, index) => {
                    return (
                        <div className="flex flex-col w-full p-6 md:w-1/3 xl:w-1/4" key={index} ref={fetchMoreData}>
                            <ProductCard 
                                product={item} 
                                handleAddtoCart={()=>{handleAddtoCart(index)}}
                                key={index}
                            />
                        </div>
                    )
                })
            }  
        </>
    )
}

export default ProductList
