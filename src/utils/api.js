import axios from "axios";
import { dataHelper } from "./apiHelper";

const PRODUCT_BASE_URL = 'https://dummyjson.com/products'

export const fetchProducts = async (urlParam) => {

    switch (urlParam) {
        case 'fashion':
            try {
                const fetchFashionProducts = await Promise.all([
                    axios.get(`${ PRODUCT_BASE_URL}/category/womens-dresses`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/womens-shoes`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/mens-shirts`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/mens-watches`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/womens-jewellery`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/sunglasses`)

                ]);

                return dataHelper(fetchFashionProducts);
            } catch (e) {
                throw new Error('Something went wrong', e.message);
            }
        case 'electronics':
            try {
                const fetchElectronicsProducts = await Promise.all([
                    axios.get(`${ PRODUCT_BASE_URL}/category/smartphones`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/laptops`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/fragrances`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/lighting`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/motorcycle`),
                    axios.get(`${ PRODUCT_BASE_URL}/category/automotive`)

                ]);

                return dataHelper(fetchElectronicsProducts);
            } catch (e) {
                throw new Error('Something went wrong', e.message);
            }
        default:
            break;
    }
}

export const fetchProductDetails = async (id) => {
    try {
        const response = await axios.get(`${PRODUCT_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product details' + error.message);
    }
}