import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image,
    Flex,
    Icon
  } from '@chakra-ui/react';
import { GoTrash } from 'react-icons/go';
import { useRemoveProductFromWishlistMutation } from '../store/api/wishlist';


const DataItem = ({ title, ...rest }) => {

    const [ removeProductFromWishlist, result ] = useRemoveProductFromWishlistMutation();

    let renderedContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores repellat, beatae totam esse autem tempora, ullam praesentium eius voluptates eveniet temporibus, modi voluptatem similique voluptate. Doloribus unde beatae facilis.'
    if (rest.images && rest.images.length) {

        const handleClick = (id) => {
            console.log(id);
            removeProductFromWishlist(id);
        }

        renderedContent = <Flex justify='center' flexWrap='wrap' gap='15px'>
                {
                    rest.images.map(({wishlistID, imageURL}) => {
                        return (
                            <Box key={wishlistID} role='group' display='inline-block' position='relative'>
                                <Image cursor='pointer' w='100px' h='100px' src={imageURL} alt='product img' />
                                <Flex onClick={() => handleClick(wishlistID)} display='none' _groupHover={{display: 'flex'}} justify='center' align='center' cursor='pointer' position='absolute' top='0' left='0' w='100px' h='100px' bg='#fff' opacity='.7'>
                                    <Icon as={ GoTrash } fontWeight='900' fontSize='32px'/>
                                </Flex>
                            </Box>
                        )
                    })
                }
        </Flex>
    }

    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    { title }
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                { renderedContent }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default DataItem;
