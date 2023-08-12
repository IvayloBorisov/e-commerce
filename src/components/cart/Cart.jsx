import { useSelector } from 'react-redux';
import {  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Flex, Text, Icon, Box } from '@chakra-ui/react';
import CartItem from './CartItem';
import { AiOutlineShopping } from 'react-icons/ai';

const Cart = ({ carBtnRef, isOpen, onClose }) => {

  const { cart, totalSum } = useSelector(state => state.cart);

  let renderedCartItems;
  if (cart && cart.length) {
    renderedCartItems = cart.map(({ product }) => {
      return <CartItem  key={ product.id } product={ product } />
    });
  } else {
    renderedCartItems = (
      <Flex direction='column' align='center' justify='center' gap='20px' mt='100px'>
        <Box display='inline-flex' w='90px' h='90px' fontSize='60px' borderRadius='50%' bg='#f5f5f5' alignItems='center' justifyContent='center'>
          <Icon as={ AiOutlineShopping } color='#cccccc' />
        </Box>
        <Text textTransform='uppercase' fontWeight='900' fontSize='18px' textAlign='center'>Cart is empty</Text>
      </Flex>
    );
  }

  return (
    <>
      <Drawer
        size='md'
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={carBtnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textTransform='capitalize'>My Shopping Cart</DrawerHeader>

          <DrawerBody>
            <Flex direction='column' gap='20px'>
            { renderedCartItems }
            </Flex>
          </DrawerBody>

          {
            (cart && cart.length)
            ?
            <DrawerFooter flexWrap='wrap' gap='10px'>
              <Flex w='100%' justify='space-between' fontSize='18px' fontWeight='400'>
                <Text>Shipping cost</Text>
                <Text textTransform='uppercase'>Free</Text>
              </Flex>
              <Flex w='100%' justify='space-between' fontSize='20px' fontWeight='900'>
                <Text as='span' fontWeight='900'>Estimated total <Text as='span' fontSize='14px' fontWeight='400' color='gray.400'>incl. VAT</Text></Text>
                <Text>{ totalSum > 0 && `$ ${parseFloat(totalSum).toFixed(2)}` }</Text>
              </Flex>
              <Button w='100%' variant='solid' py='25px' colorScheme='green' fontWeight='900' textTransform='uppercase' letterSpacing='2px'>Checkout</Button>
            </DrawerFooter>
            : false
          }
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart;
