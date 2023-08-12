import { Card, CardBody, Image, CardFooter, Flex, Text } from "@chakra-ui/react";
import ChakraRouterCustomLink from './ChakraRouterCustomLink';

const ProductItem = ({ product }) => {

    return (
        <Card key={product.id} w='300px' borderRadius='none'>
            <ChakraRouterCustomLink display='flex' flexDirection='column' h='100%' to={`/product/${product.id}`}>
                <CardBody>
                    <Image src={product.thumbnail} fallbackSrc="https://via.placeholder.com/300" h='100%' objectFit='cover' />
                </CardBody>
                <CardFooter>
                    <Flex direction='column'>
                        <Text>{product.title}</Text>
                        <Text>$ {product.price}</Text>
                    </Flex>
                </CardFooter>
            </ChakraRouterCustomLink>
        </Card>
    )
}

export default ProductItem;
