
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Image, Text, Button, Icon, Select } from "@chakra-ui/react";
import { GoTrash } from "react-icons/go";
import { updateCart, deleteFromCart } from "../../store";

const SELECT_OPTIONS = 20;

const CartItem = ({ product }) => {

    const dispatch = useDispatch();
    const quantity = useSelector(state => state.cart.cart.find(cartItem => cartItem.product.id === product.id).quantity);

    const handleDeleteFromCart = () => {
        dispatch(deleteFromCart({id: product.id, quantity}))
    }

    const handleSelectChange = event => {
        const quantity = event.target.value;
        dispatch(updateCart({id: product.id, quantity}));
    }

    return (
        <Box flex='1' border='1px solid lightgray' p='40px' >
            <Flex gap='30px'>
                <Box>
                    <Image w='70px' h='70px' src={product.thumbnail} />
                </Box>
                <Box w='100%'>
                    <Flex justify='space-between' fontWeight='900' fontSize='18px'>
                        <Box w='60%'>
                            <Text>{ product.title }</Text>
                        </Box>
                        <Box>
                            <Text>$ { parseFloat(product.price).toFixed(2) }</Text>
                        </Box>
                    </Flex>

                    <Flex justify='space-between' mt='20px'>
                        <Box w='60%'>
                            <Select cursor='pointer' onChange={ handleSelectChange } value={ quantity }>
                                {
                                    Array.from({length: SELECT_OPTIONS}, (_, index) => index + 1).map((value) => <option value={value}>{ value }</option>)
                                }
                            </Select>
                        </Box>
                        <Box>
                            <Button onClick={ handleDeleteFromCart } variant='ghost'>
                                <Icon as={ GoTrash } />
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default CartItem;
