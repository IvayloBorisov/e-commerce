import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';
import { useDisclosure, Box, Button, Flex, Icon, Image, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Center } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { GoHeart, GoTag } from 'react-icons/go';
import FormModal from '../components/FormModal';
import WishlistForm from '../components/WishlistForm';

const ProductDetailsPage = () => {

    const [ clickedImage, setClickedImage ] = useState('');
    const [ isHovered, setIsHovered ] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const productData = useLoaderData();

    const handleClickImage = (e) => {
        setClickedImage(e.target.src)
    }

    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    const handleUnHovered = () => {
        setIsHovered(!isHovered);
    }

    const handleAddToCart = () => {
        dispatch(addToCart(productData))
    }

    const productImages = productData.images.map(image => <Image key={image} src={image} h='50px' objectFit='cover' _hover={{transform: 'scale(1.5)', transition: 'transform .2s ease-out'}} cursor='pointer' onClick={handleClickImage} />)
    return (
        <>
            <Center py='150px'>
                <Flex direction={{base: 'column', lg: 'row'}} align='flex-start' gap='40px' >
                    <Flex direction='column' gap='25px'>
                        <Box onMouseEnter={handleHover} onMouseLeave={handleUnHovered}>
                            <Image position='relative' transform={`scale(${isHovered ? 1.5 : 1})`} transition='transform .2s linear' zIndex='99' src={clickedImage ? clickedImage : productData.thumbnail} />
                        </Box>
                        <Flex gap='20px'>
                            { productImages }
                        </Flex>
                    </Flex>
                    <Flex direction='column' mt='20px' gap='30px' w='300px'>
                        <Box>
                            <Text as='h2' mt='0px' pt='0px' textTransform='uppercase' fontSize='24px' fontWeight='900' color='#2D2D2D'>{productData.title}</Text>
                            <Text as='span' fontWeight='900' fontSize='18px' color='#666666'>$ {parseFloat(productData.price).toFixed(2)}</Text>
                        </Box>
                        <Flex gap='20px' bg='#cde2f5' p='20px'>
                            <Text>
                                <Icon fontWeight='900' fontSize='20px' as={GoTag} lineHeight='24px' mt='6px' />
                            </Text>
                            <Box>
                                <Text textTransform='uppercase'>20% off full-price</Text>
                                <Text as='span'>With code: <Text as='span' textTransform='uppercase' fontWeight='900'>Newfit</Text></Text>
                            </Box>
                        </Flex>
                        <Flex align='center' justify='space-between'>
                            <Button onClick={ handleAddToCart } colorScheme='green' variant='solid' p='10px 50px' textTransform='uppercase' fontWeight='900'letterSpacing='2px'>Add to cart</Button>
                            <Flex w='40px' h='40px' borderRadius='50%' bg='#eeeeee' justify='center' align='center' onClick={onOpen}>
                                <Icon as={GoHeart} fontSize='25px' fontWeight='900' cursor='pointer' />
                            </Flex>
                        </Flex>

                        <Accordion allowToggle maxWidth='300px'>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Product Details
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {productData.description}
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                            <AccordionPanel pb={4}>
                                    {productData.brand}
                                </AccordionPanel>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Brand
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                            </AccordionItem>
                            </Accordion>
                    </Flex>
                </Flex>
            </Center>
            <FormModal title='Add favorites' onClose={onClose} isOpen={isOpen}>
                <WishlistForm onClose={onClose} product={productData}  />
            </FormModal>
        </>
    )
}

export default ProductDetailsPage;
