import Products from '../models/Product'
import axios from 'axios'

export default class BaseService {

    private static baseURL: string = 'http://localhost:1337/'

    // Get All Product
    public static async getAll<T>(url: string): Promise<Products[]> {

        let res = await axios.get<Array<T>>(this.baseURL + url)
        .then(response => {
            return response.data;
        }).catch(function(error){
            return error;
        });

        return res;
    }

    // Get Product By ID

    // Post new Product

    // Edit Product

    // Delete Porject

}
