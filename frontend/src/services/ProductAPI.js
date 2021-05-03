/* eslint-disable import/no-anonymous-default-export */
import http from '../constants/configAxios'
import { limitQueryPerPage } from '../constants/configAxios'

//Method Read All Product
const getAllProduct = () => {
    return http.get('products')
}

//Method Read By ID
const getProductById = (id) => {
    return http.get(`products/${id}`);
}

//Method Add New Product
const addNewProduct = (data) => {
    return http.post(`products`, data);
}

//Method Update Product
const updateProduct = (id, data) => {
    return http.put(`products/${id}`, data);
}
  
//Method Delete Product
const deleteProduct = (id) => {
    return http.delete(`products/${id}`);
}

const getProductByLimit = async (start) =>{
    return await http.get(`products/?_start=${start*limitQueryPerPage}&_limit=${limitQueryPerPage}`);
}

const getProductCount = () =>{
    return http.get('products/count');
}

export default {
    getAllProduct,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct,
    getProductByLimit,
    getProductCount
}