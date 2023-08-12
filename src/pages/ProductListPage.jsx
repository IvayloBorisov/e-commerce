import { Grid, Flex } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const ProductsListPage = () => {

    const productsData = useLoaderData();
    const renderedProducts = productsData.map(product => <ProductItem key={ product.id } product={ product } />);

    return (
        <Flex p='50px' justify='center'>
            <Grid templateColumns='repeat(4, 1fr)' gap='20px'>
                {renderedProducts}
            </Grid>
        </Flex>
    )
}

export default ProductsListPage;
