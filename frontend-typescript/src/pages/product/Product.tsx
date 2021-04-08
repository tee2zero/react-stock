import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';


// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const Product = () => {
    return (
        <Admin dataProvider={simpleRestProvider('http://localhost:1337/products')}>
            <Resource name="products" list={ListGuesser} />
        </Admin>
    )
}

export default Product
