import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UnorderedList, ListItem, Icon, Image, Flex, Center, Text, useDisclosure } from "@chakra-ui/react";
import { GoHeart, GoPerson } from 'react-icons/go';
import { AiOutlineShopping } from 'react-icons/ai'
import ChakraRouterCustomLink from "../ChakraRouterCustomLink";
import Cart from '../cart/Cart';

const Navbar = () => {

    const cartBtnRef = useRef();
    const { totalQuantity } = useSelector(state => state.cart);
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <nav>
                <Flex bg='#2D2D2D' color='#fff' justify='center' fontWeight='600'>
                    <UnorderedList styleType='none' display='flex' alignItems='center' w='600px' ml='0px'>
                        <ListItem fontWeight='900' fontSize='32' h='100%' borderLeft='1px solid #525050' borderRight='1px solid #525050' _hover={{bg: '#474747'}}>
                            <ChakraRouterCustomLink to='/' navLink display='inline-flex' alignItems='center' h='100%' px='20px'>
                                <Image src='/logo.svg' />
                            </ChakraRouterCustomLink>
                        </ListItem>
                        <ListItem h='100%' borderRight='1px solid #525050' _hover={{bg: '#474747'}}>
                            <ChakraRouterCustomLink to='/fashion' navLink display='inline-flex' alignItems='center' h='100%' px='20px'>FASHION</ChakraRouterCustomLink>
                        </ListItem>
                        <ListItem h='100%' borderRight='1px solid #525050' _hover={{bg: '#474747'}}>
                            <ChakraRouterCustomLink  to='/electronics' navLink display='inline-flex' alignItems='center' h='100%' px='20px'>ELECTRONICS</ChakraRouterCustomLink>
                        </ListItem>
                    </UnorderedList>
                    <UnorderedList styleType='none' display='flex' justifyContent='flex-end' alignItems='center' ml='0px' w='600px'>
                        <ListItem borderLeft='1px solid #525050' borderRight='1px solid #525050' _hover={{bg: '#474747'}}>
                            <Center>
                                <ChakraRouterCustomLink to='/users' navLink display='inline-flex' p='20px'>
                                    <Icon as={ GoPerson } fontSize='30px' />
                                </ChakraRouterCustomLink>
                            </Center>
                        </ListItem>
                        <ListItem borderRight='1px solid #525050' _hover={{bg: '#474747'}}>
                            <Center>
                                <ChakraRouterCustomLink to='wishlists' navLink display='inline-flex' p='20px'>
                                    <Icon as={ GoHeart } fontSize='30px' />
                                </ChakraRouterCustomLink>
                            </Center>
                        </ListItem>
                        <ListItem borderRight='1px solid #525050' _hover={{bg: '#474747'}} ref={cartBtnRef} onClick={onOpen}>
                            <Center>
                                <ChakraRouterCustomLink to='#' navLink display='inline-flex' p='20px'>
                                    <Icon as={ AiOutlineShopping } fontSize='30px'/>
                                    {
                                        totalQuantity > 0 &&
                                        <Flex ml='-10px' mt='-5px'  bg='red' color='#fff' w='20px' h='20px' borderRadius='50%' justify='center' >
                                            <Text as='span' textAlign='center'fontSize='14px'>{ totalQuantity }</Text>
                                        </Flex>
                                    }
                                </ChakraRouterCustomLink>
                            </Center>
                        </ListItem>
                    </UnorderedList>
                </Flex>
            </nav>
            <Cart isOpen={isOpen} onOpen={onOpen} onClose={onClose} cartBtnRef={cartBtnRef} />
        </>
    )
}

export default Navbar;
