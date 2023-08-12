import { useState } from 'react';
import { useAddProductToWishlistMutation } from '../store/api/wishlist';
import { Box, Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

const WishlistForm = ({ onClose, product }) => {

    const [ addProductToWishlist, result ] = useAddProductToWishlistMutation();
    const [wishlistFormValues, setWishlistFormValues] = useState({
        email: '',
    });

    const handleFormChange = event => {
        const { value, name } = event.target;
        setWishlistFormValues({
            ...wishlistFormValues,
            [name]: value
        });
    }

    const handleWishlistFormSubmit = event => {
        event.preventDefault();
        addProductToWishlist({email: wishlistFormValues.email, productImage: product.thumbnail})
        onClose();
    }

    return (
        <Box pb='15px'>
            <form method='POST' onSubmit={handleWishlistFormSubmit}>
                <Flex direction='column' gap='20px'>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' name='email' value={wishlistFormValues.email} onChange={handleFormChange} />
                    </FormControl>
                    <Box>
                        <Button variant='solid' colorScheme='green' type='submit' onSubmit={handleWishlistFormSubmit}>Submit</Button>
                    </Box>
                </Flex>
            </form>
        </Box>
    )
}

export default WishlistForm;
