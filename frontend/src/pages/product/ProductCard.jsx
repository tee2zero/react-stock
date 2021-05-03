import React from 'react'
import { baseURLAPI } from '../../constants/configAxios'
import NumberFormat from 'react-number-format'

const ProductCard = (props) => {

    const { handleAddtoCart } = props
    const imageURL = baseURLAPI.substring(0, baseURLAPI.length - 1)

    // desctructing
    const { image, title, description, price } = props.product

    return (

        <>
            <div className="px-4 py-2">
                <h1 className="text-lg font-bold text-center text-gray-800 uppercase dark:text-white">{title}</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description && description.substring(0, 80)} ...</p>
            </div>
            {image ?
                <img className="object-cover w-full h-48 mt-2" src={imageURL + image.url} alt={title} />
                :
                <img className="w-10 h-10 rounded-full" src="/assets/images/noimg.jpg"  alt="" />
            }
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">
                    <NumberFormat value={price} fixedDecimalScale={true} decimalScale={2} thousandSeparator={true} displayType={'text'} /> บาท
                </h1>
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                    onClick={handleAddtoCart}>สั่งซื้อ</button>
            </div>
        </>

    )
}

export default ProductCard
